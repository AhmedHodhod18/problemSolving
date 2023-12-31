let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
alphabet = alphabet.split("");
function rot13(str) {
  // create accumulator
  let accumulator = '';

  // loop through the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const isALetter = alphabet.includes(char);
    // if char is not letter, add to acc
    if (!isALetter) {
      accumulator += char;
    } else {
      // else, rotate + or - 13, add to acc
      const charIndex = alphabet.findIndex((c) => c === char);

      accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13];
    }
  }
  return accumulator;
}

// Change the inputs below to test
console.log(rot13('SERR PBQR PNZC'));
