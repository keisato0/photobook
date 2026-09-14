document.addEventListener("DOMContentLoaded", () => {
  const svg = document.querySelector(".world-svg");
  const tooltip = document.getElementById("mapTooltip");
  const listEl = document.getElementById("mobileCountryList");

  const lastUpdatedEl = document.getElementById("lastUpdated");
  if (lastUpdatedEl && typeof WORLD_LAST_UPDATED !== "undefined") {
    lastUpdatedEl.textContent = `最終更新日: ${WORLD_LAST_UPDATED}`;
  }

  // 日本の写真枚数は日本地図側のデータ（PHOTOS）から合算する
  const japanPhotoCount =
    typeof PHOTOS !== "undefined"
      ? Object.values(PHOTOS).reduce((sum, arr) => sum + arr.length, 0)
      : 0;

  function hrefFor(country) {
    return country.code === "jp" ? "japan.html" : `gallery.html?country=${country.code}`;
  }

  function photoCountFor(country) {
    return country.code === "jp" ? japanPhotoCount : (WORLD_PHOTOS[country.code] || []).length;
  }

  if (svg) {
    COUNTRIES.forEach((country) => {
      const el = svg.querySelector(`#${CSS.escape(country.code)}`);
      if (!el) return;

      el.classList.add("country");
      const photoCount = photoCountFor(country);
      if (photoCount > 0) {
        el.classList.add("has-photos");
      }

      el.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.clientX + "px";
        tooltip.style.top = e.clientY + "px";
      });

      el.addEventListener("mouseenter", () => {
        const countLabel = photoCount > 0 ? `<span class="count">${photoCount}枚</span>` : `<span class="count">写真なし</span>`;
        tooltip.innerHTML = `${country.kanji}${countLabel}`;
        tooltip.classList.add("visible");
      });

      el.addEventListener("mouseleave", () => {
        tooltip.classList.remove("visible");
      });

      el.addEventListener("click", () => {
        window.location.href = hrefFor(country);
      });
    });
  }

  // ---------- モバイル用の一覧（地図はタップしづらいため） ----------
  if (listEl) {
    const sorted = [...COUNTRIES].sort((a, b) => a.kanji.localeCompare(b.kanji, "ja"));
    const ul = document.createElement("ul");
    sorted.forEach((country) => {
      const photoCount = photoCountFor(country);
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = hrefFor(country);
      if (photoCount > 0) a.classList.add("has-photos");
      const name = document.createElement("span");
      name.textContent = country.kanji;
      const count = document.createElement("span");
      count.className = "count";
      count.textContent = photoCount > 0 ? `${photoCount}枚` : "写真なし";
      a.appendChild(name);
      a.appendChild(count);
      li.appendChild(a);
      ul.appendChild(li);
    });
    listEl.appendChild(ul);
  }
});
