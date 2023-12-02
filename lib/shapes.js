// parent class that will extend to Circle, Square and Triangle classes
class Shapes {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    // Shape class takes in setColor function
    setColor(color) {
        this.shapeColor = color;
    }
}



// Triangle constructor extended from Shapes
class Triangle extends Shapes {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
            <text x="155" y="165" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    };
}

// Circle constructor extended from Shapes
class Circle extends Shapes {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    render() {
        return `
        <svg version="1.1"
            width="300" height="300"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    };
}

// Rectangle constructor extended from Shapes
class Rectangle extends Shapes {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="150" height="100" fill="${this.shapeColor}"/>
            <text x="75" y="80" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    };
}

module.exports = { Triangle, Circle, Rectangle }
// module.exports = Circle;
// module.exports = Rectangle;
