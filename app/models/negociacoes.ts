import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // private negociacoes: Array<Negociacao> = []; 
    private negociacoes: Negociacao [] = []; // Simplicação da linha de cima, mas ambas compilam

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // lista(): ReadonlyArray<Negociacao> {
    public lista(): readonly Negociacao[] { // Simplicação da linha de cima, mas ambas compilam
        return this.negociacoes;
    }
}