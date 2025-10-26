// ✅ Đổi từ sự kiện window.load sang hàm export để Vue có thể gọi
export function initIntro() {
  const intro = document.getElementById('intro');
  if (!intro) return;

  // Hiệu ứng fade-in -> fade-out rồi xoá phần tử
  setTimeout(() => {
    intro.classList.add('fade-in');
    intro.style.opacity = '0'; // Làm mờ dần

    setTimeout(() => {
      intro.remove(); // Xoá div "intro" sau khi hoàn thành
    }, 2000); // 2 giây sau khi bắt đầu fade
  }, 500); // chờ 0.5 giây sau khi trang mount
}
