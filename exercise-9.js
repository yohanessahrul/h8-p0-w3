function pasanganTerbesar(num) {
    // ubah menjadi string
    var numString = String(num);
    // ubah menjadi array
    numString.split('');
    var bucket = [];
    // ulang sebanyak panjangnya data, namun dikurangi
    // satu agar dapat dikelompokkan menjadi 2 digit
    for(var i = 0; i < numString.length-1; i++){
      bucket.push(numString.substr(i, 2));
    }
    // console.log(bucket);
    
    // urutkan dari z - a, lalu pilih array pertama
    var hasil = bucket.sort(function(a, b){ return a < b});
    hasil = hasil[0];
    
    return Number(hasil);
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99