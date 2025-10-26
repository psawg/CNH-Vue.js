export function initScrollbar() {
  const body = document.body;
  if (body && !body.classList.contains("scrollbar")) {
    body.classList.add("scrollbar");
  }
}
