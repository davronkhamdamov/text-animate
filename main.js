let time = Number(prompt('kun boshidam  qancha sekund otdi'));
function name1(time) {
  let x = time / 60;
  let y = time / 3600;
  let result1 = x.toString();
  let result2 = y.toString();
  let result = `Kun boshidan ${result1} minut o'tdi:
Kun boshidan  ${result2} soat o'tdi`;
  return result;
}
alert(name1(time));
