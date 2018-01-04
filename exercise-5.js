function perpangkatanDua(str) {
    var pangkatDua = Math.log2(str);
    
    if(pangkatDua % 2 !== 0){
        return -1;
    } else {
      return pangkatDua;
    }
}

console.log(perpangkatanDua(64));
console.log(perpangkatanDua(22));
console.log(perpangkatanDua(16));
console.log(perpangkatanDua(222));
console.log(perpangkatanDua(1));