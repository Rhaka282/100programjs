function cek() {
  const teks = document.getElementById("teks").value.trim();
  const panjang = teks.length;
  document.getElementById("hasil").textContent = "Panjang: " + panjang + " karakter";
}
