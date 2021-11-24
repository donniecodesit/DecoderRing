const expect = require('chai').expect;
const caesar = require('../src/caesar').caesar;

describe("ceasar() tests written manually", () => {
    describe("Error Testing", () => {
        it ("should return false if any input type is wrong.", () => {
            const test1 = caesar(false, 10);
            const test2 = caesar(false, false);
            const test3 = caesar(false, false, 100);
            expect(test1).to.be.false;
            expect(test2).to.be.false;
            expect(test3).to.be.false;
        });
        it ("should return false if the shift is 0", () => {
            const actual = caesar("String", 0);
            expect(actual).to.be.false;
        });
        it ("should return false if the shift is below -25", () => {
            const actual = caesar("String", -51);
            expect(actual).to.be.false;
        });
        it ("should return false if the shift is above 25", () => {
            const actual = caesar("String", 51);
            expect(actual).to.be.false;
        });
    });
    describe("Encoding", () => {
        it("should successfully shift the input", () => {
            const expected = "jgnnqyqtnf";
            const actual = caesar("helloworld", 2);
            expect(actual).to.equal(expected);
        });
        it("should be able to encode negatively", () => {
            const expected = "fcjjmumpjb";
            const actual = caesar("helloworld", -2);
            expect(actual).to.equal(expected);
        });
    });
    describe("Decoding", () => {
        it("should successfully shift in the other direction", () => {
            const expected = "helloworld";
            const actual = caesar("jgnnqyqtnf", 2, false);
            expect(actual).to.equal(expected);
        });
        it("should be able to decode negatively", () => {
            const expected = "helloworld";
            const actual = caesar("fcjjmumpjb", -2, false);
            expect(actual).to.equal(expected);
        });
    })
    describe("Other Cases", () => {
        it("should leave spaces and symbols alone", () => {
            const expected = "jgnnq yqtnf!";
            const actual = caesar("hello world!", 2);
            expect(actual).to.equal(expected);
        });
        it("should lowercase capital letters", () => {
            const expected = "jgnnqyqtnf";
            const actual = caesar("HELLOworld", 2);
            expect(actual).to.equal(expected);
        });
        it("should handle wrapping after Z", () => {
            const expected = "bgdtc";
            const actual = caesar("zebra", 2);
            expect(actual).to.equal(expected);
        });
    });
});