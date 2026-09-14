document.addEventListener("DOMContentLoaded", () => {
  const svg = document.querySelector(".geolonia-svg-map");
  const tooltip = document.getElementById("mapTooltip");
  const listEl = document.getElementById("mobilePrefList");

  const lastUpdatedEl = document.getElementById("lastUpdated");
  if (lastUpdatedEl && typeof LAST_UPDATED !== "undefined") {
    lastUpdatedEl.textContent = `最終更新日: ${LAST_UPDATED}`;
  }

  function photoCountFor(pref) {
    return (PHOTOS[pref.slug] || []).length;
  }

  if (svg) {
    svg.querySelectorAll(".prefecture").forEach((group) => {
      const code = group.dataset.code;
      const pref = PREFECTURES.find((p) => String(p.code) === String(code));
      if (!pref) return;

      const photoCount = photoCountFor(pref);
      if (photoCount > 0) {
        group.classList.add("has-photos");
      }

      group.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.clientX + "px";
        tooltip.style.top = e.clientY + "px";
      });

      group.addEventListener("mouseenter", () => {
        const countLabel = photoCount > 0 ? `<span class="count">${photoCount}枚</span>` : `<span class="count">写真なし</span>`;
        tooltip.innerHTML = `${pref.kanji}${countLabel}`;
        tooltip.classList.add("visible");
      });

      group.addEventListener("mouseleave", () => {
        tooltip.classList.remove("visible");
      });

      group.addEventListener("click", () => {
        window.location.href = `gallery.html?pref=${pref.slug}`;
      });
    });
  }

  // ---------- モバイル用の一覧（地図はタップしづらいため、写真がある都道府県だけ表示） ----------
  if (listEl) {
    // PREFECTURES は北海道→沖縄の順に並んでおり、地方ごとにまとまっているのでそのまま使う
    const withPhotos = PREFECTURES.filter((pref) => photoCountFor(pref) > 0);
    let currentRegion = null;
    let ul = null;
    withPhotos.forEach((pref) => {
      if (pref.region !== currentRegion) {
        currentRegion = pref.region;
        const section = document.createElement("div");
        section.className = "mobile-list-region";
        const h2 = document.createElement("h2");
        h2.textContent = currentRegion;
        section.appendChild(h2);
        ul = document.createElement("ul");
        section.appendChild(ul);
        listEl.appendChild(section);
      }

      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `gallery.html?pref=${pref.slug}`;
      a.textContent = pref.kanji;
      li.appendChild(a);
      ul.appendChild(li);
    });
  }
});
