var button = document.getElementById("button");

button.addEventListener("click", function(event){
event.preventDefault();

var Si = document.getElementsByName("radio");
var n1 = document.getElementById('Num1');
var n2 = document.getElementById('Num2'); 

    if(n1.value == ''){
    document.getElementById("text").innerHTML = "Por favor,Digite o primeiro número!";  
   }
    if(n2.value == ''){
   document.getElementById("text").innerHTML = "Por favor,Digite o segundo número!";
   }
   if(n1.value == '' && n2.value == ''){
   document.getElementById("text").innerHTML = "Os números são Inválidos!";
  }
 if(n1.value != '' && n2.value != ''){
    

    for(var i= 0;i < Si.length;i++){

       if(Si[i].checked){
          var num1 = n1.value;
          var num2 = n2.value;
          var soma = 0;

        if(Si[i].value === "/"){
            soma = num1 / num2; 
  
         } else if(Si[i].value === '*'){

            soma = num1 * num2;
        
         }else if(Si[i].value === '+'){
             soma = parseInt(num1) + parseInt(num2);
  
          }else if(Si[i].value === '-'){
  
             soma = num1 - num2;
           }
           if(isNaN(soma)){

            document.getElementById("text").innerHTML = "Impossível dividir por 0";

         }else if(soma == Infinity) {
            document.getElementById("text").innerHTML = "Impossível dividir por 0";
         }else{
             document.getElementById("text").innerHTML ="A soma dos números é "+ soma;
         }

        
       }
        
     }

   } 

   
});


