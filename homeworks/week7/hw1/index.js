let startTime = 0; // 開始時間
let timer = 0; // 計時器
let isFinshed = false; // 是否完成遊戲

/* eslint-disable */
function playGame() {
  document.querySelector('body').style.background = '#FFFFFF';
  timer = setTimeout(() => {
    document.querySelector('body').style.background = '#FFAA33';
    startTime = new Date();
  }, Math.random() * 2000 + 1000);
}

// setTimeout 延遲時間區間為 1~3 秒，之後進行背景變色

function restartGame() {
  clearTimeout(timer);
  startTime = 0;
  isFinshed = false;
  playGame();
}

// restartGame 重新開始遊戲

document.querySelector('.btn').addEventListener('click', function (e) {
  document.querySelector('.btn').classList.toggle('active');
  restartGame();
  e.stopPropagation();
});

document.addEventListener('click', function () {
  if (startTime === 0) {
    alert('還沒變色喔，失敗！');
    restartGame();
  } else if (!isFinshed) {
    alert('你的成績為：' + ((new Date() - startTime) / 1000).toFixed(2) + '秒');
  }

  isFinshed = true;
  const element = document.querySelector('.btn');
  element.classList.add('active');
});

playGame();
