const readline = require('readline');

const MIN_YEAR = 1992;
const MAX_YEAR = 2050;

function getRandomYear() {
  return Math.floor(Math.random() * (MAX_YEAR - MIN_YEAR + 1)) + MIN_YEAR;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Kolik náhodných letopočtů chcete? (${MIN_YEAR}-${MAX_YEAR}): `, answer => {
  const count = Number.parseInt(answer, 10);

  if (!Number.isInteger(count) || count <= 0) {
    console.log('Zadejte prosím kladné celé číslo.');
    rl.close();
    return;
  }

  for (let i = 0; i < count; i += 1) {
    console.log(getRandomYear());
  }

  rl.close();
});
