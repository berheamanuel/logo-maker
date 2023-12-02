// constructor Shapes imported
const { Triangle, Circle, Rectangle } = require('../lib/shapes');

// A testing suite for Triangle Shape is created
describe('Triangle', () => {
    it('should return triangle shape logo with a blue background', () => {
        const shape = new Triangle('Blue', 'SVG', 'White');
        
        shape.setColor("blue");
        expect(shape.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
            <text x="155" y="165" font-size="60" text-anchor="middle" fill="White">SVG</text>
        </svg>`);
    });
});

// A testing suite for Circle Shape is created
describe('Circle', () => {
    it('should return circle shape logo with a #ca00ca background', () => {
        const shape = new Circle('#ca00ca', 'SVG', 'White');
        shape.setColor("#ca00ca");
        expect(shape.render()).toEqual(`
        <svg version="1.1"
            width="300" height="300"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="#ca00ca" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="White">SVG</text>
        </svg>`);
                      
    });
});

// A testing suite for Rectangle Shape is created
describe('Rectangle', () => {
    it('should return rectangle shape logo with a purple background', () => {
        const shape = new Rectangle('purple', 'SVG', 'White');
        shape.setColor("purple");
        expect(shape.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="150" height="100" fill="purple"/>
            <text x="75" y="80" font-size="70" text-anchor="middle" fill="White">SVG</text>
        </svg>`);            
    });
});