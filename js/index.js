function calcular(){
    var pesoinput = document.querySelector('#peso').value;
    var alturainput = document.querySelector('#altura').value;
    var resultado = document.querySelector('#res');


    var peso = Number(pesoinput);
    var altura = Number(alturainput);

    if(pesoinput <= 0 || alturainput <=0){
        alert('Preencha todos os campos corretamente!')
    }else{
       
        var imc =  (peso/(altura*altura)).toFixed(2);
        
        if (imc <= 18.3 ){
           resultado.innerHTML = `Você tem IMC ${imc},  está abaixo do peso ! `
        }else if(imc >= 25){
            resultado.innerHTML = `Você tem IMC ${imc}, está acima do peso !`
        }else{
            resultado.innerHTML = `Você tem IMC ${imc}, está no peso ideial !`
        }
        
    } 
  
}

