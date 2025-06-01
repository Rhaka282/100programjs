// Elemen DOM
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const targetDateInput = document.getElementById('target-date');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const messageEl = document.getElementById('message');

let countdownInterval;

// Format angka dengan leading zero
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Update countdown display
function updateCountdown(endDate) {
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    clearInterval(countdownInterval);
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    messageEl.textContent = 'Countdown telah berakhir!';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  daysEl.textContent = formatTime(days);
  hoursEl.textContent = formatTime(hours);
  minutesEl.textContent = formatTime(minutes);
  secondsEl.textContent = formatTime(seconds);
}

// Mulai countdown
function startCountdown() {
  const targetDateValue = targetDateInput.value;
  
  if (!targetDateValue) {
    messageEl.textContent = 'Silakan pilih tanggal dan waktu terlebih dahulu!';
    return;
  }

  const endDate = new Date(targetDateValue);
  
  if (endDate <= new Date()) {
    messageEl.textContent = 'Tanggal yang dipilih harus di masa depan!';
    return;
  }

  messageEl.textContent = 'Countdown dimulai...';
  
  // Update segera
  updateCountdown(endDate);
  
  // Update setiap detik
  clearInterval(countdownInterval); // Hentikan interval sebelumnya jika ada
  countdownInterval = setInterval(() => updateCountdown(endDate), 1000);
}

// Reset countdown
function resetCountdown() {
  clearInterval(countdownInterval);
  daysEl.textContent = '00';
  hoursEl.textContent = '00';
  minutesEl.textContent = '00';
  secondsEl.textContent = '00';
  targetDateInput.value = '';
  messageEl.textContent = '';
}

// Event listeners
startBtn.addEventListener('click', startCountdown);
resetBtn.addEventListener('click', resetCountdown);

// Set default datetime-local value to now + 1 day
window.addEventListener('load', () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(12, 0, 0, 0);
  
  // Format untuk input datetime-local (YYYY-MM-DDTHH:MM)
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const day = String(tomorrow.getDate()).padStart(2, '0');
  const hours = String(tomorrow.getHours()).padStart(2, '0');
  const minutes = String(tomorrow.getMinutes()).padStart(2, '0');
  
  targetDateInput.value = `${year}-${month}-${day}T${hours}:${minutes}`;
});