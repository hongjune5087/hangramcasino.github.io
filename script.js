let money = 100000;
let count = 0;

function spin() {
  if (money <= 0) {
    alert("잔액이 없습니다.");
    return;
  }

  money -= 10000;
  count++;

  document.getElementById("money").innerText = money;

  const items = ["💀","❌","💀","❌","💸"];
  let result = "";

  for (let i = 0; i < 3; i++) {
    result += items[Math.floor(Math.random() * items.length)];
  }

  document.getElementById("slot").innerText = result;

  setTimeout(() => {
    // 거의 무조건 지게 만들기
    alert("당신은 잃었습니다.");
  }, 300);

  // 🔥 핵심 반전
  if (count >= 5) {
    setTimeout(() => {
      document.body.innerHTML = `
        <div style="color:white; text-align:center; margin-top:100px;">
          <h1>이건 게임이 아닙니다</h1>
          <p>계속 잃는 구조, 눈치채셨나요?</p>
          <p>현실에서도 똑같습니다.</p>
        </div>
      `;
    }, 1000);
  }
}
