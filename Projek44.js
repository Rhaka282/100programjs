function hitungBMI() {
  const berat = parseFloat(document.getElementById("berat").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value) / 100;
  const bmi = berat / (tinggi * tinggi);
  let kategori = "";
  if (bmi < 18.5) kategori = "Kurus";
  else if (bmi < 25) kategori = "Normal";
  else if (bmi < 30) kategori = "Gemuk";
  else kategori = "Obesitas";
  document.getElementById("hasil").textContent = `BMI: ${bmi.toFixed(2)} (${kategori})`;
}
