function cek() {
  const kata = document.getElementById("kata").value;
  const kapital = kata === kata.toUpperCase();
  document.getElementById("hasil").textContent = kapital ? "Huruf Kapital Semua" : "Tidak Semua Kapital";
}
