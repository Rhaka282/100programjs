function hitung() {
  const p = parseFloat(document.getElementById("panjang").value);
  const l = parseFloat(document.getElementById("lebar").value);
  document.getElementById("hasil").textContent = "Luas: " + (p * l);
}
