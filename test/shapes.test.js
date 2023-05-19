const {Circle, Square, Triangle} = require("../lib/Shape");

describe('Circle', () => {
    it('Renders a circle', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill= "blue" />');

    });
  });

  describe('Square', () => {
    it('Renders a square', () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x="90" y="40" width="200" height="200" fill="red" />');

    });
  });

  describe('Triangle', () => {
    it('Renders a triangle', () => {
        const shape = new Triangle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<polygon points="0,200 300,200 150,0" fill="green" />');

    });
  });