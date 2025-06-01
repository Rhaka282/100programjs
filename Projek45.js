function tampilkanHari() {
  const tgl = new Date(document.getElementById("tanggal").value);
  const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  document.getElementById("hasil").textContent = "Hari: " + hari[tgl.getDay()];
}
