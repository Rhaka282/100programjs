function cek() {
  const teks = document.getElementById("kata").value.toLowerCase();
  const balik = teks.split("").reverse().join("");
  document.getElementById("hasil").textContent = teks === balik ? "Palindrom" : "Bukan palindrom";
}
