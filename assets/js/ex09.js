function calculadora() {

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let potencia = num1 ** num2;

    alert(`Soma = ${soma} \nSubtração = ${subtracao} \nMultiplicação = ${multiplicacao} \nDivisão = ${divisao} \nPotência = ${potencia}`);
}