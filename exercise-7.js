function hitungJumlahKata(kalimat) {
    var pecahKata = kalimat.split(' ');
    // console.log(pecahKata);
    
    var jumlah = pecahKata.length;
    return jumlah;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5