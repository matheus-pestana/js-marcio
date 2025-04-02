function calcula() {
    let input = parseInt(document.getElementById("input").value);

    let area = 3.14 * input ** 2;
    let comprimento = 2 * 3.14 * input;

    alert("Área: " + area + "\nComprimento: " + comprimento);
}