document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const countryCode = params.get("country");
  const slug = params.get("pref");

  const titleEl = document.getElementById("galleryTitle");
  const romajiEl = document.getElementById("galleryRomaji");
  const regionEl = document.getElementById("galleryRegion");
  const gridEl = document.getElementById("galleryGrid");
  const emptyEl = document.getElementById("emptyState");
  const emptyTextEl = document.getElementById("emptyStateText");
  const backLinkEl = document.getElementById("backLink");

  let entry, photos, pageTitle;

  if (countryCode) {
    entry = COUNTRIES.find((c) => c.code === countryCode);
    if (!entry) {
      titleEl.textContent = "国が見つかりません";
      document.title = "エラー | 旅の記録";
      return;
    }
    photos = WORLD_PHOTOS[entry.code] || [];
    pageTitle = entry.kanji;
    regionEl.style.display = "none";
    romajiEl.textContent = entry.english;
    backLinkEl.href = "index.html";
    emptyTextEl.textContent = "まだこの国の写真はありません。";
    document.title = `${entry.kanji} | 旅の記録`;
  } else if (slug) {
    entry = PREFECTURES.find((p) => p.slug === slug);
    if (!entry) {
      titleEl.textContent = "都道府県が見つかりません";
      document.title = "エラー | 日本旅の記録";
      return;
    }
    photos = PHOTOS[entry.slug] || [];
    pageTitle = entry.kanji;
    regionEl.style.display = "";
    regionEl.textContent = entry.region;
    romajiEl.textContent = entry.romaji;
    backLinkEl.href = "japan.html";
    emptyTextEl.textContent = "まだこの都道府県の写真はありません。";
    document.title = `${entry.kanji} | 日本旅の記録`;
  } else {
    titleEl.textContent = "ページが見つかりません";
    document.title = "エラー | 旅の記録";
    return;
  }

  titleEl.textContent = pageTitle;

  if (photos.length === 0) {
    gridEl.style.display = "none";
    emptyEl.style.display = "block";
    return;
  }

  photos.forEach((photo, index) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.caption || pageTitle;
    img.loading = "lazy";
    figure.appendChild(img);
    if (photo.caption) {
      const figcaption = document.createElement("figcaption");
      figcaption.textContent = photo.caption;
      figure.appendChild(figcaption);
    }
    figure.addEventListener("click", () => openLightbox(index));
    gridEl.appendChild(figure);
  });

  // ---------- ライトボックス ----------
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    renderLightbox();
    lightbox.classList.add("open");
  }

  function renderLightbox() {
    const photo = photos[currentIndex];
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.caption || pageTitle;
    lightboxCaption.textContent = photo.caption || "";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    renderLightbox();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % photos.length;
    renderLightbox();
  }

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", showPrev);
  document.getElementById("lightboxNext").addEventListener("click", showNext);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
  });
});
