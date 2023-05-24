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
        return "";
    }
}


class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="110" r="50" fill="${this.shapeColor}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="110" y="75" width="75" height="75" fill="${this.shapeColor}"/>`
    }
}

module.exports = { Shape, Triangle, Circle, Square }