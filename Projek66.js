function ubah() {
  const t = new Date(document.getElementById("tgl").value);
  const hasil = `${t.getDate()}-${t.getMonth() + 1}-${t.getFullYear()}`;
  document.getElementById("hasil").textContent = "Format Baru: " + hasil;
}
