const kata = ["Halo!", "Selamat datang", "Belajar JavaScript", "Semangat!"];
let i = 0;
setInterval(() => {
  document.getElementById("teks").textContent = kata[i];
  i = (i + 1) % kata.length;
}, 2000);
