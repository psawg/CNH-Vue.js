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

  // ✅ Animation cho phần news
    var isSliding = false; // Biến để theo dõi trạng thái hoạt động trượt.
  var isHovered = false; // Biến để theo dõi trạng thái di chuột.
  function animateNewsItems() {
    var { newsList, firstItem } = getNewsElements();
    var newsItems = newsList.querySelectorAll(".newsItem");

    newsItems.forEach(function (item) {
      item.style.transition = "transform 0.7s ease-in-out";
      item.style.transform = "translateX(calc(-100% - 10px))";
      isSliding = true; // Đánh dấu bắt đầu hoạt động trượt.
    });

    setTimeout(function () {
      newsItems.forEach(function (item) {
        item.style.transform = "translateX(0)";
      }, 3000);
      newsList.appendChild(firstItem);
      isSliding = false; // Đánh dấu hoàn thành hoạt động trượt.


      newsItems.forEach(function (item) {
        item.style.transition = "none";
        item.addEventListener("mouseover", function () { //Sự kiện di chuột vào.
          if (!isSliding) {
            isHovered = true;
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.7s ease";
            this.style.zIndex = "15";
            // this.style.overflow = "visible";
          }
        });
        item.addEventListener("mouseout", function () {//Sự kiện di chuột ra.
          if (!isSliding) {
            isHovered = false;
            this.style.transform = "scale(1)";
            this.style.transition = "transform 1s ease";
            this.style.zIndex = "0";
            // this.style.overflow = "hidden";
          }
        });
      });
    }, 1000);
  }
  setInterval(function () {//lặp bằng đệ quy.
    if (!isHovered) {
      animateNewsItems();
    }
  }, 3000);
  
  function getNewsElements() {//Lấy element đầu tiên và kiểm tra tồn tại.
    var newsList = document.querySelector(".newsList");
    var firstItem = newsList
      ? newsList.querySelector(".newsItem:first-child")
      : null;
    return { newsList, firstItem };
  }
}



// export function initNewsAnimation() {
//   const newsList = document.querySelector(".newsList");
//   if (!newsList) return;

//   let isHovered = false;
//   let slideInterval;

//   // -------------------------------
//   // ⚙️ Hàm thực hiện 1 lần trượt
//   // -------------------------------
//   function slideOnce() {
//     if (isHovered) return; // đang hover thì dừng

//     const firstItem = newsList.querySelector(".newsItem:first-child");
//     if (!firstItem) return;

//     // Trượt container sang trái
//     newsList.style.transition = "transform 0.8s ease-in-out";
//     newsList.style.transform = "translateX(-110%)";

//     // Sau khi trượt xong → reset vị trí và chuyển item đầu ra cuối
//     setTimeout(() => {
//       newsList.style.transition = "none"; // tạm tắt transition
//       newsList.appendChild(firstItem);    // đưa item đầu ra cuối
//       newsList.style.transform = "translateX(0)"; // reset vị trí
//     }, 800);
//   }

//   // -------------------------------
//   // 🔁 Tự động trượt định kỳ
//   // -------------------------------
//   slideInterval = setInterval(slideOnce, 3000);

//   // -------------------------------
//   // 🐭 Hover để dừng và resume
//   // -------------------------------
//   newsList.addEventListener("mouseenter", () => {
//     isHovered = true;
//     clearInterval(slideInterval);
//   });

//   newsList.addEventListener("mouseleave", () => {
//     isHovered = false;
//     slideInterval = setInterval(slideOnce, 3000);
//   });

//   // -------------------------------
//   // ✨ Hiệu ứng hover phóng to từng item
//   // -------------------------------
//   newsList.addEventListener("mouseover", (e) => {
//     const item = e.target.closest(".newsItem");
//     if (!item) return;
//     item.style.transform = "scale(1.1)";
//     item.style.transition = "transform 0.4s ease";
//     item.style.zIndex = "10";
//   });

//   newsList.addEventListener("mouseout", (e) => {
//     const item = e.target.closest(".newsItem");
//     if (!item) return;
//     item.style.transform = "scale(1)";
//     item.style.transition = "transform 0.4s ease";
//     item.style.zIndex = "1";
//   });
// }