function tampilkan() {
  const teks = document.getElementById("teks").value;
  document.getElementById("hasil").textContent = teks.split('').join(' - ');
}
