export function initSection() {
  // ✅ Chờ DOM Vue render xong
  setTimeout(() => {
    const video = document.getElementById("backgroundVideo");
    const videos = [
      "/assets/vid/GTA_VI_trailer.mp4",
      "/assets/vid/TUNIC_trailer.mp4",
      "/assets/vid/Marvel_Spider_Man_2_trailer.mp4",
      "/assets/vid/God_of_War_trailer.mp4",
      "/assets/vid/Marvel_Spider_Man_2_trailer.mp4",
      "/assets/vid/Minecraft_trailer.mp4",
    ];

    // Random video nền
    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];
    if (video) {
      video.src = randomVideo;
      video.load();
    }
  }, 500);

  // ✅ Animation cho phần news
  let isSliding = false;
  let isHovered = false;

  function getNewsElements() {
    const newsList = document.querySelector(".newsList");
    const firstItem = newsList
      ? newsList.querySelector(".newsItem:first-child")
      : null;
    return { newsList, firstItem };
  }

  function animateNewsItems() {
    const { newsList, firstItem } = getNewsElements();
    if (!newsList || !firstItem) return;

    const newsItems = newsList.querySelectorAll(".newsItem");

    newsItems.forEach((item) => {
      item.style.transition = "transform 0.7s ease-in-out";
      item.style.transform = "translateX(calc(-100% - 10px))";
      isSliding = true;
    });

    setTimeout(() => {
      newsItems.forEach((item) => {
        item.style.transform = "translateX(0)";
      });
      newsList.appendChild(firstItem);
      isSliding = false;

      // Hover effect
      newsItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
          if (!isSliding) {
            isHovered = true;
            item.style.transform = "scale(1.1)";
            item.style.transition = "transform 0.7s ease";
            item.style.zIndex = "15";
          }
        });

        item.addEventListener("mouseout", () => {
          if (!isSliding) {
            isHovered = false;
            item.style.transform = "scale(1)";
            item.style.transition = "transform 1s ease";
            item.style.zIndex = "0";
          }
        });
      });
    }, 1000);
  }

  // ✅ Lặp animation mỗi 3 giây
  setInterval(() => {
    if (!isHovered) animateNewsItems();
  }, 3000);
}
