const Palindrome = function(str) {
  let a = str.length - 1;

  if (a === 1 || str.length === 0) {
    return true;
  }
  if (str[0] === str[a]) {
    return Palindrome(str.slice(1, a));
  }
  return false;
};

//Test Case
console.log(Palindrome("ibu ratna antar ubi"));
console.log(Palindrome("kasur ini rusak"));
console.log(Palindrome("A nut for a jar of tuna"));
console.log(Palindrome("Borrow or rob?"));
console.log(Palindrome("Was it a car or a cat I saw?"));
console.log(Palindrome("Yo, banana boy!"));
console.log(Palindrome("UFO tofu?"));
