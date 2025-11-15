// export function initSection() {
//   setTimeout(() => {
//     const video = document.getElementById("backgroundVideo");
//     const videos = [
//       "/assets/vid/GTA_VI_trailer.mp4",
//       "/assets/vid/TUNIC_trailer.mp4",
//       "/assets/vid/Marvel_Spider_Man_2_trailer.mp4",
//       "/assets/vid/God_of_War_trailer.mp4",
//       "/assets/vid/Marvel_Spider_Man_2_trailer.mp4",
//       "/assets/vid/Minecraft_trailer.mp4",
//     ];

//     // Random video nền
//     const randomIndex = Math.floor(Math.random() * videos.length);
//     const randomVideo = videos[randomIndex];
//     if (video) {
//       video.src = randomVideo;
//       video.load(); 
//     }
//   }, 0);

  
//     var isSliding = false; // Biến để theo dõi trạng thái hoạt động trượt.
//     var isHovered = false; // Biến để theo dõi trạng thái di chuột.
//     function animateNewsItems() {
//     var { newsList, firstItem } = getNewsElements();
//     var newsItems = newsList.querySelectorAll(".newsItem");

//     newsItems.forEach(function (item) {
//       item.style.transition = "transform 0.7s ease-in-out";
//       item.style.transform = "translateX(calc(-100% - 10px))";
//       isSliding = true; // Đánh dấu bắt đầu hoạt động trượt.
//     });

//     setTimeout(function () {
//       newsItems.forEach(function (item) {
//         item.style.transform = "translateX(0)";
//       }, 3000);
//       newsList.appendChild(firstItem);
//       isSliding = false; // Đánh dấu hoàn thành hoạt động trượt.


//       newsItems.forEach(function (item) {
//         item.style.transition = "none";
//         item.addEventListener("mouseover", function () { //Sự kiện di chuột vào.
//           if (!isSliding) {
//             isHovered = true;
//             this.style.transform = "scale(1.1)";
//             this.style.transition = "transform 0.7s ease";
//             this.style.zIndex = "15";
//             // this.style.overflow = "visible";
//           }
//         });
//         item.addEventListener("mouseout", function () {//Sự kiện di chuột ra.
//           if (!isSliding) {
//             isHovered = false;
//             this.style.transform = "scale(1)";
//             this.style.transition = "transform 1s ease";
//             this.style.zIndex = "0";
//             // this.style.overflow = "hidden";
//           }
//         });
//       });
//     }, 1000);
//   }
//   setInterval(function () {//lặp bằng đệ quy.
//     if (!isHovered) {
//       animateNewsItems();
//     }
//   }, 3000);
  
//   function getNewsElements() {//Lấy element đầu tiên và kiểm tra tồn tại.
//     var newsList = document.querySelector(".newsList");
//     var firstItem = newsList
//       ? newsList.querySelector(".newsItem:first-child")
//       : null;
//     return { newsList, firstItem };
//   }
// }



export function initSection() {
  setTimeout(() => {
    const video = document.getElementById("backgroundVideo");
    const videos = [
      "/assets/vid/GTA_VI_trailer.mp4",
      "/assets/vid/TUNIC_trailer.mp4",
      "/assets/vid/Marvel_Spider_Man_2_trailer.mp4",
      "/assets/vid/God_of_War_trailer.mp4",
      "/assets/vid/Minecraft_trailer.mp4",
    ];

    // Random video nền
    if (video) {
      const randomVideo = videos[Math.floor(Math.random() * videos.length)];
      video.src = randomVideo;
      video.load();
    }

    // 🔥 Đợi DOM render xong mới khởi động animation
    const interval = setInterval(() => {
      const newsList = document.querySelector(".newsList");
      if (newsList) {
        clearInterval(interval);
        startNewsAnimation();
      }
    }, 300);
  }, 0);

  function startNewsAnimation() {
    let isSliding = false;
    let isHovered = false;

    function animateNewsItems() {
      const newsList = document.querySelector(".newsList");
      if (!newsList) return; // Nếu chưa render thì thoát
      const firstItem = newsList.querySelector(".newsItem:first-child");
      const newsItems = newsList.querySelectorAll(".newsItem");

      if (newsItems.length === 0) return;

      newsItems.forEach((item) => {
        item.style.transition = "transform 0.7s ease-in-out";
        item.style.transform = "translateX(calc(-100% - 10px))";
        isSliding = true;
      });

      setTimeout(() => {
        newsItems.forEach((item) => (item.style.transform = "translateX(0)"));
        if (firstItem) newsList.appendChild(firstItem);
        isSliding = false;

        newsItems.forEach((item) => {
          item.style.transition = "none";
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

    // 🔁 Lặp an toàn
    setInterval(() => {
      if (!isHovered) animateNewsItems();
    }, 3000);
  }
}
