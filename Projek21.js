const now = new Date();
const hari = now.toLocaleDateString('id-ID', { weekday: 'long' });
const tanggal = now.toLocaleDateString();
document.getElementById("tanggal").textContent = `${hari}, ${tanggal}`;
