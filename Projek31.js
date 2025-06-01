function pangkat() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const hasil = Math.pow(a, b);
  document.getElementById("hasil").textContent = "Hasil: " + hasil;
}
