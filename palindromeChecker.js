function palindrome(str) {
  str = str.toLowerCase().match(/[a-z0-9]/g);
  return str.join('') === str.reverse().join('');
}

console.log(palindrome("eye"));
