
// ----------------------------------------------
// Solution 1-1: Simple Function
// --------------------------------------------------
// Just create a simple function!  
// ----------------------------------------------

function SolutionOneOne() {
    

    // Array 
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    // (challenge 1; Total of Array)
    var total = array.reduce((cur, item) => {
        cur += item;
        return cur;
    }, 0);
 

    // (challenge 2): odd
    var odds = array.reduce((cur, item) => {
        if (item % 2 == 1) cur += item;
        return cur;
    }, 0);
 

    // (challenge 3): even
    var evens = array.reduce((cur, item) => {
        if (item % 2 == 0) cur += item;
        return cur;
    }, 0);
 
    
    // log all
    console.log(`
    ---------------------------------------
                Solution 1-1
    ---------------------------------------
    (1) Sum of Array: ${total}
    (2) Sum of Odds: ${odds}
    (3) Sum of Evens: ${evens}
    (4) Sum - odds: ${total - odds}
    (5) Sum + evens: ${total + evens}
    ---------------------------------------
    `);

    
    var result = {
        total: total,
        odds: odds,
        evens: evens,
        SumMinusOdds: total - odds,
        Sum_plus_evens: total + evens
    }

    console.log(result);

}


// ---------------------------------------------
// execute 
// ---------------------------------------------
SolutionOneOne();