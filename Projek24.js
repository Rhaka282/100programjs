document.getElementById("teks").addEventListener("input", function () {
  const kata = this.value.trim().split(/\s+/).filter(Boolean);
  document.getElementById("hasil").textContent = kata.length;
});
