function konversi() {
  let d = parseInt(document.getElementById("detik").value);
  const jam = Math.floor(d / 3600);
  d %= 3600;
  const menit = Math.floor(d / 60);
  const detik = d % 60;
  document.getElementById("hasil").textContent = `${jam} jam, ${menit} menit, ${detik} detik`;
}
