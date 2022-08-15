import { Financiamento } from "./financiamento.js";
import { Parcela } from "./parcela.js";

export class FinanciamentoCarencia extends Financiamento {
   #carencia;
   #taxaJuros;
   #parcelas = [];
   constructor(valor, entrada, taxaJuros, prazo, carencia) {
      super(valor, entrada, taxaJuros, prazo)
      this.#taxaJuros = taxaJuros;
      this.#parcelas = super.getParcelas() //vai apontar para o mesmo objeto parcelas da super classe("referencia")
      this.#carencia = carencia;
   }

   //polimorfismo

   calcParcelasMensais() {
      let saldo = this.#parcelas[0].getSaldo(); //saldo da última parcela
      for (let i = 0; i < this.#carencia; i++) {
         const numero = this.#parcelas.length;
         saldo += Financiamento.calcJuros(saldo, this.#taxaJuros);
         this.#parcelas.push(new Parcela(numero, 0, 0, 0, saldo));
      }
      super.calcParcelasMensais();
   }


}