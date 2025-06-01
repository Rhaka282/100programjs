function hitung() {
  const n1 = parseFloat(document.getElementById("n1").value);
  const n2 = parseFloat(document.getElementById("n2").value);
  const n3 = parseFloat(document.getElementById("n3").value);
  const rata = ((n1 + n2 + n3) / 3).toFixed(2);
  document.getElementById("hasil").textContent = "Rata-rata: " + rata;
}
