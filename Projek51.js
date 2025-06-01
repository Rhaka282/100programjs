document.getElementById("pass").addEventListener("input", function () {
  const val = this.value;
  let strength = "Lemah";
  if (val.length >= 8 && /[A-Z]/.test(val) && /\d/.test(val)) {
    strength = "Kuat";
  } else if (val.length >= 6) {
    strength = "Sedang";
  }
  document.getElementById("hasil").textContent = "Kekuatan: " + strength;
});
