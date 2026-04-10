let money = 500000;
let count = 0;

const symbols = ["7", "BAR", "A", "🍒", "💀"];

function spin() {
  if (money <= 0) {
    endGame();
    return;
  }

  money -= 50000;
  count++;

  document.getElementById("money").innerText = money.toLocaleString();

  let r1 = random();
  let r2 = random();
  let r3 = random();

  // 일부러 아깝게 연출
  if (count % 3 === 0) {
    r3 = r2;
  }

  document.getElementById("s1").innerText = r1;
  document.getElementById("s2").innerText = r2;
  document.getElementById("s3").innerText = r3;

  // 반전
  if (count === 6) {
    setTimeout(() => {
      document.body.innerHTML = `
        <div style="color:white; text-align:center; margin-top:100px;">
          <h1>이건 조작된 시스템입니다</h1>
          <p>당신은 계속 하게끔 설계되었습니다</p>
          <h2 style="color:red;">현실에서도 같습니다</h2>
        </div>
      `;
    }, 1000);
  }
}

function random() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function endGame() {
  document.body.innerHTML = `
    <div style="color:white; text-align:center; margin-top:100px;">
      <h1>모든 것을 잃었습니다</h1>
      <p>처음은 가벼웠습니다.</p>
      <p>끝은 같습니다.</p>
    </div>
  `;
}
