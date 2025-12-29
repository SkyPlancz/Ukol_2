const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startCountdown(start) {
  let current = start;
  console.log(current);

  const timer = setInterval(() => {
    current -= 1;
    console.log(current);

    if (current <= 0) {
      clearInterval(timer);
      console.log('Happy new year!');
      rl.close();
    }
  }, 1000);
}

rl.question('Zadejte libovolné kladné číslo: ', answer => {
  const value = Number.parseInt(answer, 10);

  if (!Number.isInteger(value) || value <= 0) {
    console.log('Zadejte prosím kladné celé číslo.');
    rl.close();
    return;
  }

  startCountdown(value);
});
