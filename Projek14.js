function hitungLuas() {
  const p = parseFloat(document.getElementById("panjang").value);
  const l = parseFloat(document.getElementById("lebar").value);
  const luas = p * l;
  document.getElementById("hasil").textContent = "Luas: " + luas;
}
