document.addEventListener("DOMContentLoaded", () => {
  const svg = document.querySelector(".geolonia-svg-map");
  const tooltip = document.getElementById("mapTooltip");

  const lastUpdatedEl = document.getElementById("lastUpdated");
  if (lastUpdatedEl && typeof LAST_UPDATED !== "undefined") {
    lastUpdatedEl.textContent = `最終更新日: ${LAST_UPDATED}`;
  }

  if (!svg) return;

  const bySlug = {};
  PREFECTURES.forEach((p) => (bySlug[p.slug] = p));

  svg.querySelectorAll(".prefecture").forEach((group) => {
    const code = group.dataset.code;
    const pref = PREFECTURES.find((p) => String(p.code) === String(code));
    if (!pref) return;

    const photoCount = (PHOTOS[pref.slug] || []).length;
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
});
