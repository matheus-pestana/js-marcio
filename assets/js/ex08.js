function calcula() {
    var capital = parseFloat(document.getElementById("capital").value);
    var taxa = parseFloat(document.getElementById("taxa").value) / 100;
    var tempo   = parseFloat(document.getElementById("tempo").value);

    var simples = capital + (capital * taxa * tempo);
    var composto = capital +  (capital * Math.pow((1 + taxa), tempo) - capital);
    alert(`Montante Simples: R$ ${simples.toFixed(2)}\nMontante Composto: R$ ${composto.toFixed(2)}`);
}