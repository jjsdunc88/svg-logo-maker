const inquirer = require("inquirer");
const fs = require("fs")
const { Circle, Triangle, Square } = require("./lib/shapes");


function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "text",
            message: "Please enter up to three characters."
        },
        {
            type: "input",
            name: "textColor",
            message: "Please enter a color keyword or a hexadecimal number."
        },
        {
            type: "list",
            name: "shape",
            message: "Please choose a shape.",
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Please enter a shape color keyword or a hexadecimal number."
        },
    ])
        .then(function (results) {
            let shapeChoice = results.shape
            let shape;
            let svgWrap;
            switch (shapeChoice) {
                case "Circle":
                    shape = new Circle()
                    break;
                case "Triangle":
                    shape = new Triangle()
                    break;
                case "Square":
                    shape = new Square()
                    break;
                default:
                    console.log("howdy");
                    break;
            }
            shape.setText(results.text)
            shape.setTextColor(results.textColor)
            shape.setShapeColor(results.shapeColor)


            svgWrap = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
            ${shape.render()}
            <text x="127" y="115" font-size="1.5em" fill="${shape.textColor}">${shape.text}</text>
            </svg>`


            fs.writeFile("logo.svg", svgWrap, (err) =>
                err ? console.error(err) : console.log("Generated logo.svg"))


        })
}


init();