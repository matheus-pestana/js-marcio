function contar() {

    // conta caracteres
    var nome = document.getElementById("nome").value;
    var nomeLimpo = nome.replace(/ /g, "");
    console.log(nomeLimpo.length);

    // conta palavras
    var palavras = nome.split(" ").length;
    console.log(palavras);

    // conta vogais
    const vogais = "aeiouAEIOU";
    nomeVogais = nomeLimpo.split("");
    vogaisContadas = 0;

    for (let i = 0; i < nomeVogais.length; i++) {
        if (vogais.includes(nomeVogais[i])) {
            vogaisContadas++;
        }
    }
    console.log(vogaisContadas);

    alert(`Seu nome possui ${nomeLimpo.length} caracteres, ${palavras} palavras e ${vogaisContadas} vogais.`);
}