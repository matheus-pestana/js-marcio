function calcula() {
    let input = document.getElementById("input").value;

    var tabuada = [input * 1, input * 2, input * 3, input * 4, input * 5, input * 6, input * 7, input * 8, input * 9, input * 10];
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tabuada do ${input}: <br>`;
    
    for (var i = 0; i < tabuada.length; i++) {
        resultado.innerHTML += `${input} x ${i + 1} = ${tabuada[i]} <br>`;
    }
}