function balikKata(kata){
    var alpabet = '';
    var arr = kata.split('');
    var kataLength = arr.length - 1;
    for(var i = kataLength; i >= 0; i--){
      alpabet += arr[i];
    }
    return alpabet;
    
  }
  
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS