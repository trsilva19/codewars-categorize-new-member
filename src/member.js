module.exports = class Member {
    
    constructor(age, handicap){
        this.age = age <= 0 ? -100: age;
        this.handicap = handicap;
    }

}