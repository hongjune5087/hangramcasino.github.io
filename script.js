let money = 1000000;
let count = 0;

const symbols = ["7", "BAR", "★", "💀"];

function spin() {
  if (money <= 0) {
    endGame();
    return;
  }

  money -= 100000;
  count++;

  document.getElementById("money").innerText = money.toLocaleString();

  let result = "";

  for (let i = 0; i < 3; i++) {
    result += symbols[Math.floor(Math.random() * symbols.length)] + " ";
  }

  document.getElementById("result").innerText = result;

  if (count % 3 === 0) {
    document.getElementById("result").innerText = "7 7 💀";
  }

  if (count === 6) {
    setTimeout(() => {
      document.body.innerHTML = `
        <div style="color:white; text-align:center; margin-top:100px;">
          <h1>이건 우연이 아닙니다</h1>
          <p>당신은 계속 하게끔 설계되었습니다</p>
          <h2 style="color:red;">현실도 같습니다</h2>
        </div>
      `;
    }, 1000);
  }
}

function endGame() {
  document.body.innerHTML = `
    <div style="color:white; text-align:center; margin-top:100px;">
      <h1>모든 것을 잃었습니다</h1>
      <p>처음은 가벼웠습니다.</p>
      <p>끝은 같았습니다.</p>
    </div>
  `;
}
