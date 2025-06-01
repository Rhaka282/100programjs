function cekEmail() {
  const email = document.getElementById("email").value;
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const valid = regex.test(email);
  document.getElementById("hasil").textContent = valid ? "Email valid" : "Email tidak valid";
}
