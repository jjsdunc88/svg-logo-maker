class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text, this.textColor = textColor, this.shapeColor = shapeColor
    }
    render() {
        return;
    }
}


class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<circle cx="25" cy="75" r="20" stroke="red" fill="${this.shapeColor}" stroke-width="5"/>`
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.shapeColor}" stroke-width="5"/>`
    }
}

module.exports = {Shape, Triangle, Circle, Square}