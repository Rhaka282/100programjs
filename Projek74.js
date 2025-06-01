function cekBMI() {
  const berat = parseFloat(document.getElementById("berat").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value) / 100;
  const bmi = berat / (tinggi * tinggi);
  document.getElementById("hasil").textContent = "BMI: " + bmi.toFixed(2);
}
