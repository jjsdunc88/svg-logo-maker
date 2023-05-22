const inquirer = require("inquirer")

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
    .then(function(results){
       console.log(results); 
})
}


init();