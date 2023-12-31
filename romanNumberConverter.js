function convertToRoman(num) {
// create roman numeral to number lookup table
  const lookupTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
// create roman numeral accumulator
  let accumulator = '';
// look through lookup table
  for (const key in lookupTable){
    const numerValue = lookupTable[key];
// while (currentNumber <= num) then subtract currentNumber from num. add symbol to accumulator
    while (numerValue <= num) {
      num -= numerValue;
      accumulator += key;
    }
  }
  return accumulator;
}

// console.log(convertToRoman(36));
