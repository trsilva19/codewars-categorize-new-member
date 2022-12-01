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

    test("should be return isValid equal to false if handicap greater than 26", async () => {
        let age = 10;
        let handicap = 27;
        let member = new Member(age, handicap);

        expect(member.isValid).toBe(false);
    });

    test("should be return isValid equal to true if handicap equal -2", async () => {
        let age = 10;
        let handicap = -2;
        let member = new Member(age, handicap);

        expect(member.isValid).toBe(true);
    });

    test("should be return isValid equal to true if handicap less than 25", async () => {
        let age = 10;
        let handicap = 25;
        let member = new Member(age, handicap);

        expect(member.isValid).toBe(true);
    });

    test("should be return isValid equal to true if handicap equal 26", async () => {
        let age = 10;
        let handicap = 26;
        let member = new Member(age, handicap);

        expect(member.isValid).toBe(true);
    });

    test("should be return senior member for member like age = 55 and handicap = 8", async () => {
        let age = 55;
        let handicap = 8;
        let category = "senior";
        let member = new Member(age, handicap);

        expect(member.category).toBe(category);
    });

});