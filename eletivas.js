//coloca o numero do botao no quadro branco
function insert(x){
let numero = document.getElementById('resultado').innerHTML; 
//faz um numero ficar do lado do outro
document.getElementById('resultado').innerHTML = numero + x;
}
//limpar a barra de conta
function clean(){
    document.getElementById('resultado').innerHTML = "";
}
function back(){
    
    let resultado = document.getElementById('resultado').innerHTML;
    //limpa apenas um numero da barra de calculo
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
}
function calcular(){
    //calcula
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = "Insira um valor"
    }
}
