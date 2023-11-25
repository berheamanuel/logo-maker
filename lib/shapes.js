// parent class that will extend to Circle, Square and Triangle classes
class Shapes {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text =  text;
        this.textColor = textColor;
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
            <polygon points="100, 15 200 0, 200 0, 200" fill="${this.shapeColor}"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
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
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
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
            <rect width="300" height="200" fill="${this.shapeColor}"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
}
