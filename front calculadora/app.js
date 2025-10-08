document.getElementById('calculadora').addEventListener('submit', async function(e) {
    e.preventDefault(); 

   
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    

    let resultado = "";
    let erro = "";
    
    switch (operacao) {
        case "somar": 
            resultado = num1 + num2;
            break;
        case "subtrair": 
            resultado = num1 - num2;
            break;
        case "multiplicar": 
            resultado = num1 * num2;
            break;
        case "divisao": /
                if (num2 === 0) {
                    erro = "Erro: Divisão por zero não é permitida.";
                } else {
                    resultado = num1 / num2;
                }
            break;
        default:
            erro = "Erro: Operação inválida.";
    }
    document.getElementById('resultado').textContent = resultado;
    document.getElementById('erro').textContent = erro;
});
