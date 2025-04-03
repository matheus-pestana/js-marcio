var nomes = []
var lista = document.getElementById("lista");

function adiciona() {

    var inputElement = document.getElementById("nomes");
    var inputValue = inputElement.value

    if (nomes.length >= 5) {
        alert("Limite de 5 nomes atingido.");
        return;
    } else if (inputValue == "") {
        alert("Campo vazio, digite um nome.");
        return;
    } else {
        nomes.push(inputValue);
        inputElement.value = "";
        console.log(nomes);
    }

    if (nomes.length == 5) {
        alert("Limite de 5 nomes atingido.");
        document.getElementById("asc").disabled = false;
        document.getElementById("desc").disabled = false;
    }
}

function asc() {
    nomes.sort();
    lista.innerHTML = "";
    for (let i = 0, j = nomes.length; i < j; i++) {
        nomes[i] = nomes[i].toLowerCase();
        console.log(nomes[i]);
        lista.innerHTML += "<li>" + nomes[i] + "</li>";
    }
}

function desc() {
    nomes.sort().reverse();
    lista.innerHTML = "";
    for (let i = 0, j = nomes.length; i < j; i++) {
        nomes[i] = nomes[i].toUpperCase();
        console.log(nomes[i]);
        lista.innerHTML += "<li>" + nomes[i] + "</li>";
    }
}