function hitung() {
  const angka = document.getElementById("angka").value.split(',').map(Number);
  const total = angka.reduce((a, b) => a + b, 0);
  const rata = total / angka.length;
  document.getElementById("hasil").textContent = "Rata-rata: " + rata.toFixed(2);
}
