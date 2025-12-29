const poleProduktu = [
  { jmeno: 'fixa', cena: 30, pocetKusu: 304 },
  { jmeno: 'sesit', cena: 23, pocetKusu: 50 },
  { jmeno: 'pravitko', cena: 60, pocetKusu: 421 },
  { jmeno: 'guma', cena: 33, pocetKusu: 154 },
  { jmeno: 'pero', cena: 50, pocetKusu: 87 },
];

const nadSto = poleProduktu.filter(polozka => polozka.pocetKusu > 100);
const polovicniStav = poleProduktu.map(polozka => ({
  ...polozka,
  pocetKusu: Math.floor(polozka.pocetKusu / 2),
}));
const celkovaCenaSkladu = poleProduktu.reduce(
  (součet, polozka) => součet + polozka.cena * polozka.pocetKusu,
  0,
);
const serazenoDleCeny = [...poleProduktu].sort((a, b) => a.cena - b.cena);

console.log('A) Kusů > 100:', nadSto);
console.log('B) Poloviční počty kusů:', polovicniStav);
console.log('C) Celková cena skladu:', celkovaCenaSkladu);
console.log('D) Seřazeno dle ceny:', serazenoDleCeny);
