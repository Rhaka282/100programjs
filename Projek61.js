function acak() {
  const nama = document.getElementById("input").value.split(",");
  const acak = nama[Math.floor(Math.random() * nama.length)].trim();
  document.getElementById("hasil").textContent = "Terpilih: " + acak;
}
