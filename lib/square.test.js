const Shape = require("./shapes")


describe("Shape", () => {
    describe("render", () => {
        it('returns a string for the corresponding SVG file with the given shape color', () => {
            const expected = `<rect x="10" y="10" width="30" height="30" fill="blue"/>`;
            const square = new Shape.Square();
            square.setShapeColor("blue")
            expect(square.render()).toEqual(expected)
        })
    })
})