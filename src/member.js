module.exports = class Member {
    
    isValid = false;

    constructor(age, handicap) {
        if( age > 0 && (handicap >= -2 )) {
            this.isValid = true
        }
        
        this.age = age;
        this.handicap = handicap;
    }

}