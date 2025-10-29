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
