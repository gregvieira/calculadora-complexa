// Adiciona números no Visor quando pressionado os botões
function calcNum(num) {
   if (typeof gvisor == 'undefined') {
      document.calcform.visor.value = '';
   }
   document.calcform.visor.value = document.calcform.visor.value + num;
   gvisor = 1;
}
 
 // Função que limpa
function calcLimpar() {
   document.calcform.visor.value = '';
   delete gvalor;
   delete goper;
   delete gvisor;
}
 
 // Operações da calculadora
function calcOper(oper, valor1, valor2) {
   if(oper =="somar"){
      var valor = parseFloat(valor1) + parseFloat(valor2);
   } else {
      if(oper =="subtrair") {
         var valor = valor1 - valor2;
      } else {
         if (oper == "multiplicar"){
            var valor = valor1 * valor2;
         } else {
            var valor = valor1 / valor2;
         }
      }
   }
   return(valor);
}

 // Ações do usuário
 
function calcParse(oper){
   var valor = document.calcform.visor.value;
   delete gvisor;

   if (typeof goper != 'undefined' && oper == 'resultado') {
      gvalor = calcOper(goper, gvalor, valor);
      document.calcform.visor.value = gvalor;
      delete oper;
      delete gavalor;
      return(0);
   }

   if (typeof gvalor != 'undefined') {
      gvalor = calcOper(goper, gvalor, valor);
      goper = oper;
      document.calcform.visor.value = gvalor;

   } else {
      gvalor = valor;
      goper = oper;
   }
}

var myGlobalVariable = 'My global variable';

var myLocalVariable = 'My Localzin'

function showName() {
   var myLocalVariable = 'my local variable';

   console.log(myGlobalVariable);
   console.log(myLocalVariable);
}