class Shape {
    constructor() {
        this.text = "", this.textColor = "", this.shapeColor = ""
    }
    setText(text) {
        this.text = text
    }
    setTextColor(textColor) {
        this.textColor = textColor
    }
    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor
    }
    render() {
        return;
    }
}


class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20" stroke="red" fill="${this.shapeColor}" stroke-width="5"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.shapeColor}" stroke-width="5"/>`
    }
}

module.exports = { Shape, Triangle, Circle, Square }