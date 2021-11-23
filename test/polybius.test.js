const expect = require('chai').expect;
const polybius = require('../src/polybius').polybius;

describe("polybius() tests written manually", () => {
    describe("Encoding", () => {
        it("should successfully encode a message.", () => {
            const expected = "3251131343";
            const actual = polybius("hello");
            expect(actual).to.equal(expected);
        });
        it("should translate both 'i' and 'j' to 42", () => {
            const expected = "42234251242445";
            const actual = polybius("imjerry");
            expect(actual).to.equal(expected);
        });
        it("should leave spaces as is", () => {
            const expected = "3251131343 2543241341"
            const actual = polybius("hello world");
            expect(actual).to.equal(expected);
        });
    });
    describe("Decoding", () => {
        it("should successfully decode a message.", () => {
            const expected = "hello";
            const actual = polybius("3251131343", false);
            expect(actual).to.equal(expected);
        });
        it("should translate 42 to '(i/j)'", () => {
            const expected = "(i/j)m(i/j)erry";
            const actual = polybius("42234251242445", false);
            expect(actual).to.equal(expected);
        });
        it("should leave spaces as is", () => {
            const expected = "hello world"
            const actual = polybius("3251131343 2543241341", false);
            expect(actual).to.equal(expected);
        });
        it("should return false if there's an odd length of numbers", () => {
            const actual = polybius("32511313430", false);
            expect(actual).to.be.false;
        });
    });
});