var primeiroCampo = document.querySelector("#Num1");
var segundoCampo = document.querySelector("#Num2");

primeiroCampo.addEventListener("keypress", (e) => {
       if(!checkChar(e)){
          e.preventDefault();
  }  
});
segundoCampo.addEventListener("keypress", (e) => {
  if(!checkChar(e)){
     e.preventDefault();
}  
});


function checkChar(e){

  const char = String.fromCharCode(e.keyCode);

  const pattern = "[0-9$,]";
  
  if(char.match(pattern)){
    return true;
  }


}

  





