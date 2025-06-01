document.getElementById("teks").addEventListener("input", function() {
  const panjang = this.value.length;
  document.getElementById("jumlah").textContent = panjang;
});
