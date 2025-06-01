function hitung() {
  const teks = document.getElementById("teks").value.trim();
  const kata = teks ? teks.split(/\s+/).length : 0;
  document.getElementById("hasil").textContent = "Jumlah kata: " + kata;
}
