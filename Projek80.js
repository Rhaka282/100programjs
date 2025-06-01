function hitung() {
  const r = parseFloat(document.getElementById("jari").value);
  const luas = Math.PI * r * r;
  document.getElementById("hasil").textContent = "Luas: " + luas.toFixed(2);
}
