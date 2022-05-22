
let input1 = document.getElementById("bt1");
let input2 = document.getElementById("bt2");
let button_addon2 = document.getElementById("button_addon2");

function PesquisarEscolas(){

    let numero1 = parseFloat(bt1.value);
    let numero2 =  parseFloat(bt2.value);
    let resultado = numero1 + numero2; 


    button_addon2.innerHTML = "O resultado foi: " + resultado;

    bt1.value = "";
    bt2.value = "";
}