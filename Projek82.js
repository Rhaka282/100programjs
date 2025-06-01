function acak() {
  const kata = document.getElementById("kata").value;
  const hasil = kata.split('').sort(() => Math.random() - 0.5).join('');
  document.getElementById("hasil").textContent = "Hasil: " + hasil;
}
