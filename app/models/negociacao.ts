export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get data(): Date {
        //Retornando uma outra referência para data, impedindo que o atributo _data do meu objeto seja modificado em outro lugar do código.
        const data = new Date(this._data.getTime()); 
        return data;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }
}