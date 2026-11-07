// 갤러리 이미지를 누르면 크게 보여 준다
const viewer = document.getElementById("viewer");
const big = viewer.querySelector("img");
const cap = viewer.querySelector(".cap");

document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    big.src = img.src;
    big.alt = img.alt;
    cap.textContent = img.alt;
    viewer.showModal();
  });
});

viewer.querySelector(".close").addEventListener("click", () => viewer.close());
viewer.addEventListener("click", (e) => {
  if (e.target === viewer) viewer.close();
});
