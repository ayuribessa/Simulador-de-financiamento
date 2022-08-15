import { Financiamento } from "./financiamento.js";
import { FinanciamentoCarencia } from "./financiamentoCarencia.js";

const comCarencia = document.querySelector('#comCarencia');
const listaSuspensa = document.querySelector('#listSuspensa');
const corpoTabela = document.querySelector('#corpoTabela');
const botaCalcular = document.querySelector('#botaoCalcular');
const textoValor = document.querySelector('#textoValor');
const textoEntrada = document.querySelector('#textoEntrada');
const textoTaxaJuros = document.querySelector('#textoTaxaJuros');
const textoPrazo = document.querySelector('#textoPrazo');

function limpaCorpoTabela() {
    while (corpoTabela.firstChild) {
        corpoTabela.removeChild(corpoTabela.firstChild);
    }
}

comCarencia.addEventListener('change', function () {
    if (this.checked) {
        listaSuspensa.removeAttribute('hidden');
    } else {
        listaSuspensa.setAttribute('hidden', 'hidden');
    }
})

botaCalcular.addEventListener('click', function () {
    limpaCorpoTabela();
    const valor = parseFloat(textoValor.value);
    const entrada = parseFloat(textoEntrada.value);
    const taxaJuros = parseFloat(textoTaxaJuros.value);
    const Prazo = parseFloat(textoPrazo.value);
    let simulacao;
    if (comCarencia.checked) {
        const carencia = parseInt(listaSuspensa.value);
        simulacao = new FinanciamentoCarencia(valor, entrada, taxaJuros, Prazo, carencia);
    }
    else {

        simulacao = new Financiamento(valor, entrada, taxaJuros, Prazo);
    }
    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
});