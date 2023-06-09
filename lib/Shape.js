class Shape {
    constructor(){
        this.shapeColor = '';
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}
//shape parameters 
class Circle extends Shape {
render() {
    return `<circle cx="150" cy="100" r="80" fill= "${this.shapeColor}" />`
}
}

class Square extends Shape {
    render () {
        return `<rect x="90" y="40" width="200" height="200" fill="${this.shapeColor}" />`
    }
};

class Triangle extends Shape {
    render () {
        return `<polygon points="0,200 300,200 150,0" fill="${this.shapeColor}" />`
    }
}
//send info out
module.exports = {Circle, Square, Triangle };