/*
Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".
*/

// Pseudocode
// siapkan variable 'tampung' untuk menampung data baru dengan tipe data string
// looping dari belakang ke depan sebanyak karakter yang ada
// tampung karakter satu persatu ke dalam variable 'tampung'
// kembalikan nilai variable 'tampung'

function balikKata(kata) {
  // you can only write your code here!
  var tampung = '';
  for(var i=kata.length-1; i >= 0; i--){
    tampung += kata[i];
  }
  
  return tampung;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

















/*
function balikKata(kata){
  var alpabet = '';
  var arr = kata.split('');
  var kataLength = arr.length - 1;
  for(i = kataLength; i >= 0; i--){
    alpabet += arr[i];
  }
  return alpabet;
  
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
*/