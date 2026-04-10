const items = ["🍒", "🍋", "🔔", "💎", "7️⃣"];

function spin() {
  let reel = document.getElementById("reel");

  let count = 0;

  let interval = setInterval(() => {
    reel.textContent = items[Math.floor(Math.random() * items.length)];
    count++;

    if (count > 20) {
      clearInterval(interval);
      reel.textContent = items[Math.floor(Math.random() * items.length)];
    }
  }, 80);
}
