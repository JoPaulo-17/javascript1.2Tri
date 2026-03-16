let lucro1 = 14;
let lucro2 = 10;
let sinal = '-'

function coiso(lucro1,lucro2){
    if(sinal == '+'){
      return lucro1 + lucro2
    }
    else if(sinal == '-'){
      return lucro1 - lucro2
    }
    else if(sinal == '*'){
      return lucro1 * lucro2
    }
    else if(sinal == '/'){
      return lucro1 / lucro2
    }
}

console.log(coiso(lucro1,lucro2))