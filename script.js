let balance = 500000;
const cost = 10000;

function spin() {
  let slot = document.getElementById("slot");
  let result = document.getElementById("result");
  let balanceText = document.getElementById("balance");

  if (balance < cost) {
    result.innerText = "❌ 돈이 부족합니다!";
    return;
  }

  balance -= cost;

  let count = 0;

  let interval = setInterval(() => {
    slot.innerText = Math.floor(Math.random() * 9) + 1;
    count++;

    if (count > 15) {
      clearInterval(interval);

      let win = Math.random() < 0.5; // 🎯 50% 확률 (2번 중 1번 느낌)

      let finalNumber = Math.floor(Math.random() * 9) + 1;
      slot.innerText = finalNumber;

      if (win) {
        let reward = cost * 2; // 당첨 시 2배
        balance += reward;
        result.innerText = "🎉 당첨! +" + reward + "원";
      } else {
        result.innerText = "😢 꽝!";
      }

      balanceText.innerText = balance;
    }
  }, 80);
}
