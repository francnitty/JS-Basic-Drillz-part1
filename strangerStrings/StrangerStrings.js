class StrangerStrings {

    getHelloWorld(){
        //1. Get program to return "Hello World"
        //2. Use segment syntax?
        let firstSegment = "Hello";
        let secondSegment = "World";
        return (`${firstSegment} ${secondSegment}`);
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
        //1. Get middle letter of the input Methodman.  Which is "o"
        //2. Based on 9 letter length, the middle letter is the 5th, which is "o"
        //3. Search for a possible js code to find the median value of the input "Methodman"
        //4. Create if/else statement, to account for odd input length vs even input length.
            
        let middle = input[Math.round((input.length - 1) / 2)];


        return middle;
        
    }

    getFirstWord(input){
        //1.  Get first word "Wutang" to return.
        //2.  Length is 11
        //3.  Given this case, we need program to return the first 6 characters or 0-5.
        //4.  Look at the words as different arrays.  Wutang is an array index = 6. Clan = 5
        //5.  Get program to seek the first occurence of a space?
        //6.  Possible solution:
        var rap = "Wutang Clan Forever";
        var group = rap.split(" ");
        return group[0];
    }
    
    getSecondWord(spaceDelimnatedInput){
        var rap = "Wutang Clan Forever";
        var group = rap.split(" ");
        return group[1];
        
    }
    
    reverse(input){
        //1. We need to get it to spell it backwards
        //2. Write code that starts at the end of string/array, and ends at 0, using Loop method.
        //3. Since starting from end, we'll use =>0 in formula.
        //4. nalCgnatuW
        //5. (I = input.length-1; i>=0; i--){reverse += input[i];}

        let reverse = "";
        var i;
        for (i = input.length-1; i>=0; i--){reverse += input[i];}
        return reverse;
    }
}

module.exports = StrangerStrings;