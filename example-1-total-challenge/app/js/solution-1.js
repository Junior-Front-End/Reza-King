
// ----------------------------------------------
// Solution 1: Simple Function
// --------------------------------------------------
// Just create a simple function! 
// And copy paste everything into that one!
// ----------------------------------------------

function SolutionOne() { 
    
    // Array 
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // ---------------------------------------------
    // (challenge 1; Total of Array)
    // ---------------------------------------------
    var total = array.reduce((cur, item) => {
        cur += item;
        return cur;
    }, 0);

    // log
    console.log(`Sum of Array: ${total }`);

    // ---------------------------------------------
    // (challenge 2): odd
    // ---------------------------------------------
    var odds = array.reduce((cur, item) => {
    if (item % 2 == 1) {
        cur += item;
    }
    return cur;
    }, 0);

    // log
    console.log(`Sum of Odds: ${odds}`);

    // ---------------------------------------------
    // (challenge 3): even
    // ---------------------------------------------
    var evens = array.reduce((cur, item) => {
    if (item % 2 == 0) {
        cur += item;
    }
    return cur;
    }, 0);

    // log
    console.log(`Sum of Evens: ${evens}`);

    // ---------------------------------------------
    // l(Challenge 4): total- odds)) 
    // ---------------------------------------------
    console.log('Sum - odds:', total - odds);

    // ---------------------------------------------
    // l(Challenge 4): total+ evens)) 
    // ---------------------------------------------
    console.log('Sum + evens:', total + evens);

}


// ---------------------------------------------
// execute 
// ---------------------------------------------
SolutionOne();