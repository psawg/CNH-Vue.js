// ✅ Export các hàm để dùng trong Vue
export function openNav() {
  const sideNav = document.getElementById("idSideNav");
  if (sideNav) sideNav.style.width = "250px";
}

export function closeNav() {
  const sideNav = document.getElementById("idSideNav");
  if (sideNav) sideNav.style.width = "0px";
}

// ✅ Behavior NavBar Scroll
let lastScrollTop = 0;
let timeout;
export function setupNavScroll() {
  window.addEventListener("scroll", () => {
    const navBar = document.querySelector(".NavBar");
    if (!navBar) return;
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      const threshold = 300;
      if (window.scrollY > lastScrollTop + threshold) {
        navBar.classList.add("nav-hide");
        navBar.classList.remove("nav-show");
      } else {
        navBar.classList.add("nav-show");
        navBar.classList.remove("nav-hide");
      }
      lastScrollTop = window.scrollY;
    }, 10);
  });
}

// ✅ Scroll đến phần NEWS
export function scrollToNews() {
  const section = document.getElementById("midContent");
  if (!section) return;
  smoothScroll(section);
}

// ✅ Scroll đến phần GAMES
export function scrollToGames() {
  const section = document.getElementById("botContent");
  if (!section) return;
  smoothScroll(section);
}

// ✅ Hàm scroll mượt chung
function smoothScroll(target) {
  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const scrollY = ease(elapsedTime, startPosition, distance, duration);
    window.scrollTo(0, scrollY);
    if (elapsedTime < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}


window.addEventListener('scroll', () => {
  const navBar = document.querySelector('.NavBar');
  if (!navBar) return;
  if (window.scrollY > 200) {
    navBar.classList.add('nav-hide');
    navBar.classList.remove('nav-show');
  } else {
    navBar.classList.add('nav-show');
    navBar.classList.remove('nav-hide');
  }
});
