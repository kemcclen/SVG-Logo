//bring together all elements
class MakeSVG {
    constructor() {
      this.textElement = '';
      this.shapeElement = '';
    }
    render() {
      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
  
    setTextElement(logoLetters, textColor) {
      this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoLetters}</text>`;
    }
    setShapeElement(logoShape) {
      this.shapeElement = logoShape.render();
    }
  }
  module.exports = MakeSVG;
  