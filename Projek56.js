function konversi() {
  const suhu = parseFloat(document.getElementById("suhu").value);
  const tipe = document.getElementById("tipe").value;
  let hasil = 0;
  if (tipe === "c2f") hasil = (suhu * 9/5) + 32;
  else hasil = (suhu - 32) * 5/9;
  document.getElementById("hasil").textContent = "Hasil: " + hasil.toFixed(2);
}
