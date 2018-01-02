function bandingkanAngka(num1, num2){
  var hasil;
  if(num1 < num2){
      hasil = true;
  } else if(num1 > num2) {
      hasil = false;
  } else {
      hasil = -1;
  }
  return hasil;
}

console.log(bandingkanAngka(5, 8));
console.log(bandingkanAngka(5, 3));
console.log(bandingkanAngka(4, 4));
console.log(bandingkanAngka(3, 3));
console.log(bandingkanAngka(17, 2));