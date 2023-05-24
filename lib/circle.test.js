const Shape = require("./shapes")


describe("Shape", () => {
    describe("render", () => {
        it('returns a string for the corresponding SVG file with the given shape color', () => {
            const expected = `<circle cx="25" cy="75" r="20" fill="blue"/>`;
            const circle = new Shape.Circle();
            circle.setShapeColor("blue")
            expect(circle.render()).toEqual(expected)
        })
    })
})