function hitung() {
  const sisi = parseFloat(document.getElementById("sisi").value);
  const volume = sisi ** 3;
  document.getElementById("hasil").textContent = "Volume: " + volume;
}
