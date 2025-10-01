export class View {
    //escapar é um parâmetro opcional. Parâmetros Opcionais devem vir por último no construtor.
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, ''); //Remove os scripts dentro dos templates
        }
        this.elemento.innerHTML = template;
    }
}
