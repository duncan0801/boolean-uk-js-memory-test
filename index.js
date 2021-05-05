/* 
Repo: boolean-uk-js-memory-test

Description
Test the user's memory with this simple little game. This will also put your skills up to the test!

Instructions
- Show the user 4 random numbers between 1 and 100
- After 15 seconds, ask them to enter each number in order
- Let them know how many they got right!

Challenge 1
When asking the user for the numbers, add ordinality to each number you ask. i.e.:
- Enter the 1st number
- Enter the 2nd number
Etc...

Challenge 2
Turn your whole program into a function that will allow you to change the number of numbers displayed and asked for by just entering the desired number as an argument when calling the function

For example:

playMemoryTest(4) should show and ask for 4 numbers

playMemoryTest(10) should show and ask for 10 numbers
*/

// 1. Show user 4 random numbers from 1-100, 2 seconds apart using setInterval(func, 2000)
// func => randomNumber: Inputs-none, action-choose a random number from 1 to 100, output: return random number
//  
    
// 2. after 15 seconds, prompt the user to input the four nuymbers in order
function memoryTest () {

    iteration = prompt(`Hello, and welcome to the game! How many numbers do you want to try and remember?`)

    function generateNumberArray () {
        let randomNumberArray = []

    for (let i = 1; i <= iteration; i++) {
        let max = 100
        let number = Math.floor((Math.random()*max))
        randomNumberArray.push(number)
        // console.log(randomNumberArray)
        }

        alert(`Here are your numbers:\n ${randomNumberArray}`)
    }
    function getUserAnswersArray () {
            answerString = prompt(`Input the numbers seperated by a space e.g 1 2 3 ...`)
            answerArray = answerString.split(" ")
            return answerArray
        
    }
    function compareArrays () {
        for (answer of getUserAnswersArray()) {
            if (answer === generateNumberArray() )
        }
    }
    
|
}

memoryTest()

// Get a random number array
// Get prompts from the user that correspond to their iteration, the prompts will make an array called userAnswers
// if generatenNumber === userAnswers