const expect = require('chai').expect;
const substitution = require('../src/substitution').substitution;

describe("substitution() tests written manually", () => {
    describe("Error Testing", () => {
        it("should return false if the alphabet key is missing", () => {
            const actual = substitution("hello");
            expect(actual).to.be.false;
        });
        it("should return false if the alphabet key is not 26 characters", () => {
            const actual = substitution("hello", "shorten");
            expect(actual).to.be.false;
        });
        it("should return false if the alphabet key contains duplicates", () => {
            const actual = substitution("hello", "zzxwvutrsqponmlkjihgfedcaa");
            expect(actual).to.be.false;
        });
        it("should return false if the input or key are not strings", () => {
            const actual = substitution(true, true, true);
            expect(actual).to.be.false;
        });
    });
    describe("Encoding", () => {
        it("should encode a message successfully", () => {
            const alphabetKey = "zyxwvutsrqponmlkjihgfedcba";
            const expected = "svool";
            const actual = substitution("hello", alphabetKey);
            expect(actual).to.equal(expected);
        });
        it("should work with special characters", () => {
            const alphabetKey = "*yxwvutsrqponmlkjihgfedcb.";
            const actual = substitution("aztec", alphabetKey);
            const expected = "*.gvx"
            expect(actual).to.equal(expected);
        });
        it("should keep the spaces", () => {
            const alphabetKey = "zyxwvutsrqponmlkjihgfedcba";
            const expected = "svool dliow";
            const actual = substitution("hello world", alphabetKey);
            expect(actual).to.equal(expected);
        });
    });
    describe("Decoding", () => {
        it("should decode a message successfully", () => {
            const alphabetKey = "zyxwvutsrqponmlkjihgfedcba";
            const expected = "hello";
            const actual = substitution("svool", alphabetKey, false);
            expect(actual).to.equal(expected);
        });
        it("should work with special characters", () => {
            const alphabetKey = "*yxwvutsrqponmlkjihgfedcb.";
            const actual = substitution("*.gvx", alphabetKey, false);
            const expected = "aztec"
            expect(actual).to.equal(expected);
        });
        it("should keep the spaces", () => {
            const alphabetKey = "zyxwvutsrqponmlkjihgfedcba";
            const expected = "hello world";
            const actual = substitution("svool dliow", alphabetKey, false);
            expect(actual).to.equal(expected);
        });
    });
});