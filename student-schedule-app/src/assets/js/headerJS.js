// ✅ Mở / đóng side nav
export function openNav() {
  const sideNav = document.getElementById("idSideNav");
  if (sideNav) sideNav.style.width = "250px";
}

export function closeNav() {
  const sideNav = document.getElementById("idSideNav");
  if (sideNav) sideNav.style.width = "0px";
}

// ✅ Behavior NavBar Scroll (ẩn / hiện khi cuộn)
let lastScrollTop = 0;
let timeout;

export function setupNavScroll() {
  // chọn đúng vùng cuộn (ưu tiên main.scrollbar, fallback window)
  const main = document.querySelector("main.scrollbar") || window;

  // nếu không tìm thấy thì bỏ qua
  if (!main) {
    console.warn("⚠️ Không tìm thấy vùng cuộn .scrollbar");
    return;
  }

  main.addEventListener("scroll", () => {
    const navBar = document.querySelector(".NavBar");
    if (!navBar) return;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      const threshold = 10; // độ nhạy (bạn có thể chỉnh 200 nếu muốn mượt hơn)
      // Nếu đang cuộn trong main, dùng main.scrollTop
      const scrollTop = main.scrollTop || window.scrollY;

      if (scrollTop > lastScrollTop + threshold) {
        // Cuộn xuống → ẩn navbar
        navBar.classList.add("nav-hide");
        navBar.classList.remove("nav-show");
      } else if (scrollTop < lastScrollTop - threshold) {
        // Cuộn lên → hiện navbar
        navBar.classList.add("nav-show");
        navBar.classList.remove("nav-hide");
      }

      lastScrollTop = scrollTop;
    }, 30); // delay nhẹ để tránh nhấp nháy
  });
}


export function scrollToNews() {
  console.log("✅ scrollToNews() called");
  const container = document.querySelector("main.scrollbar"); // ĐÚNG vùng cuộn thật
  const section = document.getElementById("midContent");
  if (!container || !section) {
    console.warn("⚠️ Không tìm thấy container hoặc midContent");
    return;
  }
  console.log("Container:", container, "Section:", section);
  const top = section.offsetTop;
  smoothScroll(container, top);
}

export function scrollToGames() {
  console.log("✅ scrollToGames() called");
  const container = document.querySelector("main.scrollbar"); // ĐÚNG vùng cuộn thật
  const section = document.getElementById("botContent");
  if (!container || !section) {
    console.warn("⚠️ Không tìm thấy container hoặc botContent");
    return;
  }
  console.log("Container:", container, "Section:", section);
  const top = section.offsetTop;
  smoothScroll(container, top);
}



function smoothScroll(container, targetPosition) {
  const startPosition = container.scrollTop;
  const distance = targetPosition - startPosition;
  const duration = 800;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const ease =
      progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

    container.scrollTop = startPosition + distance * ease;

    if (elapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}
















// // Mục đích: Điều khiển NavBar, SideNav, cuộn mượt và điều hướng router an toàn

// import { useRouter, useRoute } from "vue-router";

// export function useHeader() {
//   const router = useRouter();
//   const route = useRoute();

//   // =====================================
//   // ✅ Mở / Đóng Side Navigation
//   // =====================================
//   const openNav = () => {
//     const sideNav = document.getElementById("idSideNav");
//     if (sideNav) sideNav.style.width = "250px";
//   };

//   const closeNav = () => {
//     const sideNav = document.getElementById("idSideNav");
//     if (sideNav) sideNav.style.width = "0";
//   };

//   // =====================================
//   // ✅ Behavior ẩn/hiện NavBar khi cuộn
//   // =====================================
//   let lastScrollTop = 0;
//   let timeout;

//   const setupNavScroll = () => {
//     const scrollTarget = document.querySelector(".scrollbar") || window;

//     scrollTarget.addEventListener("scroll", () => {
//       const navBar = document.querySelector(".NavBar");
//       if (!navBar) return;
//       clearTimeout(timeout);

//       timeout = setTimeout(() => {
//         const threshold = 200;
//         const scrollTop =
//           scrollTarget.scrollTop || window.scrollY || document.documentElement.scrollTop;

//         if (scrollTop > lastScrollTop + threshold) {
//           navBar.classList.add("nav-hide");
//           navBar.classList.remove("nav-show");
//         } else {
//           navBar.classList.add("nav-show");
//           navBar.classList.remove("nav-hide");
//         }

//         lastScrollTop = scrollTop;
//       }, 10);
//     });
//   };

//   // =====================================
//   // ✅ Cuộn mượt tới phần tử chỉ định
//   // =====================================
//   const smoothScroll = (selector) => {
//     const target = document.querySelector(selector);
//     if (!target) return;

//     const targetPosition = target.getBoundingClientRect().top + window.scrollY;
//     const startPosition = window.scrollY;
//     const distance = targetPosition - startPosition;
//     const duration = 1000;
//     let startTime = null;

//     function animation(currentTime) {
//       if (startTime === null) startTime = currentTime;
//       const elapsed = currentTime - startTime;
//       const scrollY = ease(elapsed, startPosition, distance, duration);
//       window.scrollTo(0, scrollY);
//       if (elapsed < duration) requestAnimationFrame(animation);
//     }

//     function ease(t, b, c, d) {
//       t /= d / 2;
//       if (t < 1) return (c / 2) * t * t + b;
//       t--;
//       return (-c / 2) * (t * (t - 2) - 1) + b;
//     }

//     requestAnimationFrame(animation);
//   };

//   // =====================================
//   // ✅ Các hành động chính (tương đương test1, test2)
//   // =====================================
// const goToNews = async () => {
//   if (route.name !== "Section") {
//     await router.push({ name: "Section" });
//     // Đợi Vue render DOM thật sự rồi mới scroll
//     setTimeout(() => smoothScroll("#midContent"), 1200);
//   } else {
//     setTimeout(() => smoothScroll("#midContent"), 200);
//   }
//   closeNav();
// };

// const goToGames = async () => {
//   if (route.name !== "Section") {
//     await router.push({ name: "Section" });
//     setTimeout(() => smoothScroll("#botContent"), 1200);
//   } else {
//     setTimeout(() => smoothScroll("#botContent"), 200);
//   }
//   closeNav();
// };

//   // =====================================
//   // ✅ Export cho Header.vue sử dụng
//   // =====================================
//   return {
//     openNav,
//     closeNav,
//     setupNavScroll,
//     goToNews,
//     goToGames,
//   };
// }
