const Member = require("../src/member");

describe('Member tests', () => { 

    test("should be validated if the member has age and handicap", async () => { 
        let age = 10;
        let handicap = 20;

        let member = new Member(age, handicap);

        expect(member.age).toBe(age);
        expect(member.handicap).toBe(handicap);
    });

    test("should return -100 if age is zero", async () => {
        let age = 0;
        let handicap = 20;
        let member = new Member(age, handicap);

        expect(member.age).toBe(-100);
    });

});