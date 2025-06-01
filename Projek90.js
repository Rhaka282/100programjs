let nyala = false;
function toggle() {
  nyala = !nyala;
  document.getElementById("lampu").src = nyala 
    ? "https://www.w3schools.com/js/pic_bulbon.gif"
    : "https://www.w3schools.com/js/pic_bulboff.gif";
}
