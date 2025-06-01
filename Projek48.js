document.getElementById("teks").addEventListener("input", function () {
  const sisa = 100 - this.value.length;
  document.getElementById("info").textContent = `${sisa} karakter tersisa`;
});
