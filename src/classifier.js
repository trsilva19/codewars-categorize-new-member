module.exports = class Classifier {
    
    constructor() {
    }

    categorize(memberList) {
        memberList.forEach(member => {
            if(member.isValid && member.age >= 55 && member.handicap > 7 ) {
                member.category = "senior";
            } else {
                if(member.isValid){
                    member.category = "open";
                }
            }

         });
    } 

}