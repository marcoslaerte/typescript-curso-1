export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar = false;

    //escapar é um parâmetro opcional. Parâmetros Opcionais devem vir por último no construtor.
    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique!`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, ''); //Remove os scripts dentro dos templates
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;

}