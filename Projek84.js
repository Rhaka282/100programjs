function hitungPPN() {
  const harga = parseFloat(document.getElementById("harga").value);
  const ppn = harga * 0.11;
  document.getElementById("hasil").textContent = "PPN: Rp" + ppn.toFixed(2);
}
