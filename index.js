const inquirer = require('inquirer');
const fs = require('fs');
const MakeSVG = require('./lib/makeLogo');
const { Circle, Square, Triangle } = require('./lib/Shape.js');

function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'logoLetters',
        message: 'Please enter your logo letters, it must not be more than 3 letters',
      },
      {
        type: 'input',
        name: 'textColor',
        message: `Please enter text color keyword or a hexadecimal number for the logo's text color`,
      },
      {
        type: 'input',
        name: 'logoColor',
        message: `Please enter a color keyword or a hexadecimal number for the logo's background color`,
      },
      {
        type: 'list',
        name: 'logoShape',
        message: `Please choose logo shape`,
        choices: ['circle', 'square', 'triangle'],
      },
    ])
    .then(({ logoLetters, textColor, logoColor, logoShape }) => {
      let shape;
      switch (logoShape) {
        case 'circle':
          shape = new Circle();
          break;

        case 'square':
          shape = new Square();
          break;

        case 'triangle':
          shape = new Triangle();
          break;
      }
      shape.setColor(logoColor);

      const svgGen = new MakeSVG();
      svgGen.setTextElement(logoLetters, textColor);
      svgGen.setShapeElement(shape);

      const finalSvg = svgGen.render();
      console.log(finalSvg);

      fs.writeFile('logo.svg', finalSvg, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Generated logo.svg');
        }
      });
    })
    .catch((err) => console.error(err));
}

init();
