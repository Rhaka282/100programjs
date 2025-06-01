function cek() {
  const t = parseInt(document.getElementById("tahun").value);
  const kabisat = (t % 4 === 0 && t % 100 !== 0) || (t % 400 === 0);
  document.getElementById("hasil").textContent = kabisat ? "Tahun Kabisat" : "Bukan Tahun Kabisat";
}
