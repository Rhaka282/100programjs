function cek() {
  const email = document.getElementById("email").value;
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  document.getElementById("hasil").textContent = valid ? "Email valid" : "Email tidak valid";
}
