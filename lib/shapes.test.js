// constructor Shapes is imported
const { Triangle, Circle, Rectangle } = require('../shapes.js');

// A testing suite for Shapes is created
describe('Triangle', () => {
    it('should return triangle shape logo with a blue backgroung', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Circle', () => {
    it('should return circle shape logo with a #ca00ca background', () => {
        const shape = new Circle();
        shape.setColor("#ca00ca");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="#ca00ca" />');
    });
});

describe('Rectangel', () => {
    it('should return rectangle shape logo with a purple background', () => {
        const shape = new Square();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
            '<rect x="73" y="40" width="200" height="160" fill="purple" />');
    });
});