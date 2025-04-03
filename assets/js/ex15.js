var erro = 0

function entrar() {
    var emailFixo = "teste@gmail.com"
    var senhaFixo = "1234"

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email == emailFixo && senha == senhaFixo) {
        alert("Você entrou!!!!!")
        erro = 0
    } else {
        alert("Parabéns, você errou a senha")
        erro += 1
        console.log(erro)
    }

    if (erro == 3) {
        document.getElementById("button").disabled = true;
        setInterval(function () {
            document.getElementById("button").disabled = false
        }, 10000)
    }
}