class StrangerStrings {

    getHelloWorld(){
        return null;
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){
        //get first three letters of input word

        //1. Get the first letter
        let firstLetter = input[0]

        //2. Get the second letter
        let secondLetter = input[1]

        //3. Get the third letter
        let thirdLetter = input[2]

        //4. Put them back together again
        return firstLetter + secondLetter + thirdLetter
    }

    getSuffix(input){
        //Get last three letters of input word

        //1. Get last letter
        let thirdToLastLetter = input[input.length-3];

        //2. Get 2nd to last letter
        let secondToLastLetter = input[input.length-2];

        //3. Get 3rd to last letter
        let lastLetter = input[input.length-1];
        //4. Put them back together again
        return thirdToLastLetter + secondToLastLetter + lastLetter;
    }

    getMiddleCharacter(input){
        return null;
    }

    getFirstWord(input){
        return null;
    }
    
    getSecondWord(spaceDelimnatedInput){
        return null;
    }
    
    reverse(input){
        return null;
    }
}

module.exports = StrangerStrings;