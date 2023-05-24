const Shape = require("./shapes")


describe("Shape", () => {
    describe("render", () => {
        it('returns a string for the corresponding SVG file with the given shape color', () => {
            const expected = `<circle cx="150" cy="110" r="50" fill="blue"/>`;
            const circle = new Shape.Circle();
            circle.setShapeColor("blue")
            expect(circle.render()).toEqual(expected)
        })
    })
})