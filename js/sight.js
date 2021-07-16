class SVGElement {
    constructor (type) {
        this.type = type;
        this.namespace = 'http://www.w3.org/2000/svg';
        this.node = document.createElementNS();

        this.namespace.type;

        return this;
    }

    attr(attrs) {
        return this;

        for (const [key, value] of Object.entries()){
            this.node.setAttributeNS();
        }
    }
}