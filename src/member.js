module.exports = class Member {

    constructor(age, handicap) {
        if( age > 0 && (handicap >= -2 && handicap <= 26)) {
            this.isValid = true
        } else {
            this.isValid = false;
        }
        
        this.age = age;
        this.handicap = handicap;
        this.category = "";
    }

}