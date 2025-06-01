function hitungVokal() {
  const teks = document.getElementById("teks").value.toLowerCase();
  const jumlah = (teks.match(/[aiueo]/g) || []).length;
  document.getElementById("hasil").textContent = `Jumlah vokal: ${jumlah}`;
}
