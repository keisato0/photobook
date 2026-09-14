"""generate_photos.py / generate_world_photos.py の共通ロジック。"""

import json
import re

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".gif"}
SEPARATOR_RE = re.compile(r"^[\s、,，・\-_/]+")
SPLIT_RE = re.compile(r"[、,，]")
DATE_PATTERNS = [
    re.compile(r"(\d{4})年(\d{1,2})月(\d{1,2})日"),
    re.compile(r"(\d{4})年(\d{1,2})月"),
    re.compile(r"(\d{4})[./\-](\d{1,2})[./\-](\d{1,2})"),
    re.compile(r"(\d{4})[./\-](\d{1,2})"),
    re.compile(r"(\d{4})年"),
    re.compile(r"(\d{4})"),
]


def load_js_object(path, var_name):
    text = path.read_text(encoding="utf-8")
    match = re.search(rf"^const {var_name}\s*=\s*(\[.*?\]|\{{.*?\}})\s*;", text, re.S | re.M)
    if not match:
        return None
    return json.loads(match.group(1))


def extract_date_key(caption):
    """キャプション末尾の撮影時期を (年, 月, 日) に変換する。見つからなければ None。"""
    segments = [s for s in SPLIT_RE.split(caption) if s.strip()]
    candidates = [segments[-1]] if segments else []
    candidates.append(caption)  # 区切りで分割できない場合は全体から探す
    for candidate in candidates:
        for pattern in DATE_PATTERNS:
            m = pattern.search(candidate)
            if m:
                groups = [int(g) for g in m.groups()]
                year = groups[0]
                month = groups[1] if len(groups) > 1 else 1
                day = groups[2] if len(groups) > 2 else 1
                return (year, month, day)
    return None


def match_name(stem, entries, name_field, key_field, suffixes=()):
    """ファイル名の先頭にある名前（entries[name_field]）を探し、(key, 残りの文字列) を返す。

    見つからなければ (None, None)。名前の後ろに suffixes のいずれか（例: 県/府/都）が
    続いていても許容する。
    """
    for entry in entries:
        name = entry[name_field]
        rest = None
        if stem.startswith(name):
            rest = stem[len(name):]
        else:
            for suffix in suffixes:
                if stem.startswith(name + suffix):
                    rest = stem[len(name) + len(suffix):]
                    break
        if rest is not None:
            rest = SEPARATOR_RE.sub("", rest)
            return entry[key_field], rest
    return None, None


def sort_by_date(files):
    """[(name, caption), ...] を撮影時期の早い順に並べ替える。

    戻り値は (並び替え後のリスト, 時期が読み取れなかったファイル名のリスト)。
    時期が読み取れないものは末尾にまとめ、ファイル名順にする。
    """
    no_date = []
    keyed = []
    for name, caption in files:
        date_key = extract_date_key(caption)
        if date_key is None:
            no_date.append(name)
        keyed.append((date_key, name, caption))
    keyed.sort(key=lambda item: (item[0] is None, item[0] or (0, 0, 0), item[1]))
    return [(name, caption) for _, name, caption in keyed], no_date
