const Member = require("../src/member");
const Classifier = require("../src/classifier");

describe('Member tests', () => { 

    test("should be return senior member for member like age = 55 and handicap = 8", async () => {
        let age = 55;
        let handicap = 8;
        let member = new Member(age, handicap);
        let memberList = [member];
        new Classifier().categorize(memberList);

        expect(memberList[0].category).toBe("senior");
    });

    test("should be return senior member for member like age = 60 and handicap = 10", async () => {
        let age = 60;
        let handicap = 10;
        let member = new Member(age, handicap);
        let memberList = [member];
        new Classifier().categorize(memberList);

        expect(memberList[0].category).toBe("senior");
    });

    test("should be return open member for member like age = 55 and handicap = 7", async () => {
        let age = 55;
        let handicap = 7;
        let member = new Member(age, handicap);
        let memberList = [member];
        new Classifier().categorize(memberList);

        expect(memberList[0].category).toBe("open");
    });

    test("should be return open member for member like age = 40 and handicap = 8", async () => {
        let age = 40;
        let handicap = 8;
        let member = new Member(age, handicap);
        let memberList = [member];
        new Classifier().categorize(memberList);

        expect(memberList[0].category).toBe("open");
    });

    test("should be return open member for member like age = 0 and handicap = -1", async () => {
        let age = 0;
        let handicap = -1;
        let member = new Member(age, handicap);
        let memberList = [member];
        new Classifier().categorize(memberList);

        expect(memberList[0].category).toBe("");
    });

    test("should be return [senior, senior] member for memberList like [(60,10), (55, 8)] ", async () => {
        let member1 = new Member(60, 10);
        let member2 = new Member(55, 8);
        let memberList = [member1, member2];
        new Classifier().categorize(memberList);

        expect(memberList[0].category).toBe("senior");
        expect(memberList[1].category).toBe("senior");
    });

    test("should be return [senior, open] member for memberList like [(60,10), (40, 8)] ", async () => {
        let member1 = new Member(60, 10);
        let member2 = new Member(40, 8);
        let memberList = [member1, member2];
        new Classifier().categorize(memberList);

        expect(memberList[0].category).toBe("senior");
        expect(memberList[1].category).toBe("open");
    });

    test("should be return [open, open] member for memberList like [(60,10), (40, 8)] ", async () => {
        let member1 = new Member(55, 7);
        let member2 = new Member(40, 8);
        let memberList = [member1, member2];
        new Classifier().categorize(memberList);

        expect(memberList[0].category).toBe("open");
        expect(memberList[1].category).toBe("open");
    });

    test("should be return ['', ''] member for memberList like [(0,10), (-1, 8)] ", async () => {
        let member1 = new Member(0, 10);
        let member2 = new Member(-1, 8);
        let memberList = [member1, member2];
        new Classifier().categorize(memberList);

        expect(memberList[0].category).toBe("");
        expect(memberList[1].category).toBe("");
    });

    test("should be return list length equal zero for empty list", async () => {
        let memberList = [];
        new Classifier().categorize(memberList);

        expect(memberList.length).toBe(0);
    });

});