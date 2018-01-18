/*
Diberikan sebuah function hitungJumlahKata(kalimat) yang menerima parameter berupa string yang merupakan sebuah kalimat. Function akan mengembalikan jumlah kata dari kalimat tersebut. Contoh, "I have a dream" akan menghasilkan nilai 4, karena memiliki 4 kata.
*/

// Pseudocode
// key ( hitung jumlah spasinya, dengan default spasi sebelumnya mempunyai nilai 1)
// buar variable 'spasi' dengan nilai default '1'
// looping kalimat dari kiri ke kanan sebanyak panjang karakter yang ada
// jika menemukan (spasi) ' ', tambahkan variable spasi dengan nilai 1
// kembalikan nilai spasi

function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var spasi = 1;
    for(var i=0; i<kalimat.length; i++){
      if(kalimat[i] === ' '){
        spasi++;
      }
    }
    
    return spasi;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
  
  
  
  
  
  
  /*
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
  
  */