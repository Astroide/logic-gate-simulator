export class Screen {
    constructor(htmlElement) {
        this.htmlElement = htmlElement;
    }

    hide() {
        this.htmlElement.classList.add('hidden');
    }

    show() {
        this.htmlElement.classList.remove('hidden');
    }

    toggle() {
        this.htmlElement.classList.toggle('hidden');
    }
}