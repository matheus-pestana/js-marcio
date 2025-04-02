function texto() {
    var texto = document.getElementById("input1").value;
    var input2 = document.getElementById("input2");

    textoReverso = texto.split("").reverse().join("");
    input2.value = textoReverso;
}