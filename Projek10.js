function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "admin" && pass === "1234") {
    document.getElementById("status").textContent = "Login berhasil!";
  } else {
    document.getElementById("status").textContent = "Username/password salah.";
  }
}
