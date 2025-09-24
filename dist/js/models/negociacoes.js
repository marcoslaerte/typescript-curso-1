export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = []; 
        this.negociacoes = []; // Simplicação da linha de cima, mas ambas compilam
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): ReadonlyArray<Negociacao> {
    lista() {
        return this.negociacoes;
    }
}
