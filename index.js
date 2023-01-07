function step1(array) {
    let ages = array;
    return (array);
}

function step1a(array1) {
    let last = array1.length;
    sub = array1[(last)-1] - array1[(last)-(last)];
    console.log("The last element ,", array[(last)-1], "minus the first element ,", array[(last)-(last)],"is", sub,'.');
}


function step1b() {
    var next = prompt("Enter a new number");
    next = parseInt(next);
    array.push(next);
    console.log("You have added", next, "to the array");
    let last2 = array.length;
    sub = array[(last2)-1] - array[(last2)-(last2)];
    console.log("The last element,", array[(last2)-1], "minus the first elsement,", array[(last2)-(last2)],"is",sub,'.');
}


function step1c(array) {
    let sum = 0
    for(i = 0; i < (array.length); i++) {
        sum = sum + array[i];
        }
    let avg = (sum / (array.length));
    console.log("The total sum of the ages are",sum,'.');
    console.log("The total number of ages is", (array.length),'.');
    return (avg);
}

function step2(names) {
    let step2Names = names;
    return (step2Names);
}

function step2a(names) {
    let arraySize = names.length;
    let total = 0;
    for(i = 0; i < arraySize; i++){
        let name1 = names[i];
        total = total + name1.length;
    }
    avgSize = total / arraySize
    console.log("The average number of letters per name is",avgSize,'.');
}

function step2b(names) {
    let con = ("")
    for(i = 0; i < names.length; i++){
        let name1 = names[i];
        con = con + " " + name1;
    }
    console.log("Concatenate all the names together, separated by spaces ->", con);
}

function step5(names) {
    let nameLengths = [];
    let charLength = 0;
    for(i = 0; i < names.length; i++){
        let charLength = names[i];
        nameLengths.push(charLength.length);           
    }
    console.log("nameArray =",names);
    console.log("nameLengths =", nameLengths);
}

function step6(name) {
let arraySize1 = name.length;
    let total2 = 0;
    let charLength2 = 0;
    for(i = 0; i < names.length; i++){
        let charLength2 = names[i];
        total2 = total2 + charLength2.length;
    }
    console.log("The sum of all the elements in the array is", total2,".");
}

function step7(word,n){
    let conc2 = ("");
    for(i=0; i < n; i++){
        conc2 = conc2 + word;
    }
    console.log("You entered the word", word, ", and the number", n,".", word, "concatenated", n, "times looks like this -->", conc2);
} 

function step8(firstName,lastName){
    let fullName = firstName + " " + lastName;
    console.log("You entered", firstName, "and", lastName, "."); 
    return (fullName);   
}

function step9(numbersArray){
    let totalSum = 0;
    for(i = 0; i < numbersArray.length; i++){
        totalSum = totalSum + numbersArray[i];
        
    }
    if(totalSum > 100){
        return true;
    }else{
        return false;
    }
}

function step10(numArray) {
    let total = 0;
    for(i = 0; i < numArray.length; i++){
        total = total + numArray[i];   
    }
    avgSize = total / numArray.length
    console.log("The average of all numbers in the array is",avgSize,'.');
    return(avgSize);
}

function step11(first, second) {
    if (first > second) {
        return (true);
    }else {
        return(false);
          }        

}

function willBuyDrink(temp, money) {
    if(temp === "True" && money > 10.50) {
        return("True");
    }else {
        return("False");
    }
}

function seatChoice(passWidth) {
    for(i = 0; i < passWidth[0].length; i++) {
        let avail = passWidth[1][i];

        if(avail < 1) {
            console.log(passWidth[0][i], "(Neighbor shoulder width in", passWidth[0][i-1],"->",passWidth[1][i-1], "inches, and", passWidth[0][i+1], "->", passWidth[1][i+1],"inches.)");
            if (passWidth[1][i-1] < 15 && passWidth[1][i+1] < 15) {
             console.log("      **We recommend this seat!!***");
            }else {
                console.log("      **We do not recomend this seat!!**");
            }
        }

    }  
}


console.log("//Coding Step 1 Function step1");
let array = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(step1(array));

console.log("");
console.log("//Coding Step 1a Function step1a");
step1a(array);

console.log("");
console.log("//Coding Step 1b Function step1b");
step1b();

console.log("");
console.log("//Coding Step 1c Function step1c");
var onecavg = step1c(array);
console.log("The average age is", onecavg);

console.log("");
console.log("//Coding Step 2 Function step2");
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(step2(names));

console.log("");
console.log("//Coding Step 2a Function step2a");
step2a(names);

console.log("");
console.log("//Coding Step 2b Function step2b");
step2b(names);

console.log("");
console.log("//Coding Step 5 Function step5");
step5(names); 

console.log("");
console.log("//Coding Step 6 Function step6");
step6(names); 
    
console.log("");
console.log("//Coding Step 7 Function step7");
var enterWord = prompt("Enter a word");
var enterNum = prompt("Enter a number");
step7(enterWord, enterNum); 


console.log("");
console.log("//Coding Step 8 Function step8");  
var first = prompt("Enter your first name");
var last = prompt("Enter you last name");
console.log("Your full name is", step8(first, last),".");

console.log("");
console.log("//Coding Step 9 Function step9");
let numArray = [100, 2, 3, 17, 23, 67, 213];
console.log("The array contains these numbers", numArray);
console.log("The sum of the numbers are > 100", step9(numArray));

console.log("");
console.log("//Coding Step 10 Function step10");
let onecav = step10(numArray);


console.log("");
console.log("//Coding Step 11 Function step11");
console.log(array);
console.log("Average", onecavg);
console.log(numArray);
console.log("Average", onecav);
console.log("The first array's average is > then the second array", step11(onecavg, onecav));

console.log("");
console.log("//Coding Step 12 Function step12");
var isHotOutside = prompt("It is hot today, True or False?");
var moneyInPocket = prompt("How much money do you have in your pocket?");
console.log(willBuyDrink(isHotOutside, moneyInPocket));

//Last minute traveling is no fun!!  
//You always have to sit in a middle seat on the plane
//Wouldn't it be nice if you knew the sholder width of your neighbors??
//My code finds the available seats and supplies you your neighbors shoulder width
//Yes my airline requires you tell me your shoulder width

console.log("");
console.log("//Coding Step 13 Function step13");

let passWidth = [["14A", "14B", "14C", "13A", "13B", "13C", "14D", "14E", "14F"], [20,0,17,8,0,18,13,0,8]];
console.log("Available seats");

seatChoice(passWidth);





