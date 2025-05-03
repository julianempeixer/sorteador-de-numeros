function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);

    if (min >= max) {
        alert('O valor inicial deve ser menor que o valor final. Por favor, verifique.');
        reiniciar();
        return;
    }   
 
    if (quantidade > (max - min + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }
      
   /* if (quantidade < (max - min + 1)) {
        alert('A quatidade de números sorteados deve ser maior que o número do intervalo entre valor mínimo e máximo. Por favor, verifique.');
        reiniciar();
        return;
    } */

    let sorteados = [];
    let numero;

    for (let  i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(min, max);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(min, max);
        }
        sorteados.push(numero);
        }
    console.log(`Quantidade: ${quantidade}`);
    console.log(`Do número: ${min}`);
    console.log(`Até o número: ${max}`);
    console.log(`Números gerados: ${sorteados}`);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('min').value = '';
    document.getElementById('max').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}