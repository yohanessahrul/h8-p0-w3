function angkaPalindrome(num) {
  
    var hasil = '';
  
    for(var i=1; i<=num+100; i++){
      var ori = String(i).split('');
      var balik = String(i).split('').reverse();
      
      var fixedOri = ori.join('');
      var fixedBalik = balik.join('');
      
      if(fixedOri === fixedBalik && fixedOri > num){
        hasil += fixedOri;
        break;
      }
    }
    return Number(hasil);
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9 
  console.log(angkaPalindrome(10)); // 11 
  console.log(angkaPalindrome(117)); // 121 
  console.log(angkaPalindrome(175)); // 181 
  console.log(angkaPalindrome(1000)); // 1001
  
  
  