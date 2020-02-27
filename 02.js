const first = ["Behind", "every", "great", "man"];
const second = ["is", "a", "woman"];
const third = ["rolling", "her", "eyes"];

//mengabungkan aray
const four = second.concat(first, third);
//panggil setence
const five = four.join(" ");

console.log(four);
console.log(five);
