document.addEventListener("DOMContentLoaded", () => {
  const svg = document.querySelector(".world-svg");
  const tooltip = document.getElementById("mapTooltip");
  if (!svg) return;

  const lastUpdatedEl = document.getElementById("lastUpdated");
  if (lastUpdatedEl && typeof WORLD_LAST_UPDATED !== "undefined") {
    lastUpdatedEl.textContent = `最終更新日: ${WORLD_LAST_UPDATED}`;
  }

  // 日本の写真枚数は日本地図側のデータ（PHOTOS）から合算する
  const japanPhotoCount =
    typeof PHOTOS !== "undefined"
      ? Object.values(PHOTOS).reduce((sum, arr) => sum + arr.length, 0)
      : 0;

  COUNTRIES.forEach((country) => {
    const el = svg.querySelector(`#${CSS.escape(country.code)}`);
    if (!el) return;

    el.classList.add("country");

    const isJapan = country.code === "jp";
    const photoCount = isJapan ? japanPhotoCount : (WORLD_PHOTOS[country.code] || []).length;
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
      if (isJapan) {
        window.location.href = "japan.html";
      } else {
        window.location.href = `gallery.html?country=${country.code}`;
      }
    });
  });
});
