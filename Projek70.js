function hitung() {
  const sisi = parseFloat(document.getElementById("sisi").value);
  const luas = sisi * sisi;
  document.getElementById("hasil").textContent = "Luas: " + luas;
}
