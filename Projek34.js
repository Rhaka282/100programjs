function cek() {
  const teks = document.getElementById("teks").value.toLowerCase().replace(/\s/g, '');
  const balik = teks.split("").reverse().join("");
  document.getElementById("hasil").textContent = teks === balik ? "Palindrom" : "Bukan palindrom";
}
