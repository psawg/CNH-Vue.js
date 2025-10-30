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
  }, 0);

  // // ✅ Animation cho phần news
  // var isSliding = false; // Biến để theo dõi trạng thái hoạt động trượt.
  // var isHovered = false; // Biến để theo dõi trạng thái di chuột.
  // function animateNewsItems() {
  //   var { newsList, firstItem } = getNewsElements();
  //   var newsItems = newsList.querySelectorAll(".newsItem");

  //   newsItems.forEach(function (item) {
  //     item.style.transition = "transform 0.7s ease-in-out";
  //     item.style.transform = "translateX(calc(-100% - 10px))";
  //     isSliding = true; // Đánh dấu bắt đầu hoạt động trượt.
  //   });

  //   setTimeout(function () {
  //     newsItems.forEach(function (item) {
  //       item.style.transform = "translateX(0)";
  //     }, 3000);
  //     newsList.appendChild(firstItem);
  //     isSliding = false; // Đánh dấu hoàn thành hoạt động trượt.


  //     newsItems.forEach(function (item) {
  //       item.style.transition = "none";
  //       item.addEventListener("mouseover", function () { //Sự kiện di chuột vào.
  //         if (!isSliding) {
  //           isHovered = true;
  //           this.style.transform = "scale(1.1)";
  //           this.style.transition = "transform 0.7s ease";
  //           this.style.zIndex = "15";
  //           // this.style.overflow = "visible";
  //         }
  //       });
  //       item.addEventListener("mouseout", function () {//Sự kiện di chuột ra.
  //         if (!isSliding) {
  //           isHovered = false;
  //           this.style.transform = "scale(1)";
  //           this.style.transition = "transform 1s ease";
  //           this.style.zIndex = "0";
  //           // this.style.overflow = "hidden";
  //         }
  //       });
  //     });
  //   }, 1000);
  // }
  // setInterval(function () {//lặp bằng đệ quy.
  //   if (!isHovered) {
  //     animateNewsItems();
  //   }
  // }, 3000);
  
  // function getNewsElements() {//Lấy element đầu tiên và kiểm tra tồn tại.
  //   var newsList = document.querySelector(".newsList");
  //   var firstItem = newsList
  //     ? newsList.querySelector(".newsItem:first-child")
  //     : null;
  //   return { newsList, firstItem };
  // }
  // ✅ Animation cho phần news
let isSliding = false;  // Theo dõi trạng thái trượt
let isHovered = false;  // Theo dõi trạng thái di chuột

// 🔹 Lấy phần tử .newsList và item đầu tiên
function getNewsElements() {
  const newsList = document.querySelector(".newsList");
  if (!newsList) return { newsList: null, firstItem: null }; // Tránh null
  const firstItem = newsList.querySelector(".newsItem:first-child");
  return { newsList, firstItem };
}

function animateNewsItems() {
  const { newsList, firstItem } = getNewsElements();

  // 🔸 Nếu không có newsList hoặc không có phần tử, thoát luôn để tránh lỗi
  if (!newsList || !firstItem) return;

  const newsItems = newsList.querySelectorAll(".newsItem");
  if (newsItems.length === 0) return; // Không có phần tử nào thì bỏ qua

  // Hiệu ứng trượt
  newsItems.forEach((item) => {
    item.style.transition = "transform 0.7s ease-in-out";
    item.style.transform = "translateX(calc(-100% - 10px))";
  });
  isSliding = true;

  setTimeout(() => {
    newsItems.forEach((item) => {
      item.style.transform = "translateX(0)";
    });
    newsList.appendChild(firstItem);
    isSliding = false;

    // Hover effect (chỉ gán 1 lần, tránh bị nhân đôi listener)
    newsItems.forEach((item) => {
      if (!item.dataset.bound) {
        item.dataset.bound = "true"; // Đánh dấu đã bind
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
      }
    });
  }, 1000);
}

// ✅ Chỉ khởi chạy khi DOM đã sẵn sàng
window.addEventListener("DOMContentLoaded", () => {
  const { newsList } = getNewsElements();
  if (newsList) {
    setInterval(() => {
      if (!isHovered) animateNewsItems();
    }, 3000);
  }
});

}



