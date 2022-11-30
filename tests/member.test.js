const Member = require("../src/member");

describe('Member tests', () => { 

    test("should be validated if the member has age and handicap", async () => { 
        let age = 10;
        let handicap = 20;

        let member = new Member(age, handicap);

        expect(member.age).toBe(age);
        expect(member.handicap).toBe(handicap);
    });

    test("should return isValid equal false if age is zero", async () => {
        let age = 0;
        let handicap = 20;
        let member = new Member(age, handicap);

        expect(member.isValid).toBe(false);
    });

    test("should return isValid equal false if age less than zero", async () => {
        let age = -2;
        let handicap = 20;
        let member = new Member(age, handicap);

        expect(member.isValid).toBe(false);
    });

    test("should return isValid true if age greater than zero", async () => {
        let age = 10;
        let handicap = 20;
        let member = new Member(age, handicap);

        expect(member.isValid).toBe(true);
    });

    test("should be return isValid equal to false if handicap less than -2", async () => {
        let age = 10;
        let handicap = -10;
        let member = new Member(age, handicap);

        expect(member.isValid).toBe(false);
    });

});