
// --------------------------------------------------
// Solution Two: Class Methods
// --------------------------------------------------
// Create a class! 
// Define functions as the class methods! 
// --------------------------------------------------

class SolutionTwo {
    
    constructor(){
        this.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    } 

    // ---------------------------------------------
    // (challenge 1; Total of Array)
    // ---------------------------------------------
    calculateTotal() {
        
        // 
        var total = this.array.reduce((cur, item) => {
            cur += item;
            return cur;
        }, 0);

        // set a new variable to the class named "total" with given value: total
        this.total = total;

        // log
        console.log(`Sum of Array: ${total}`);
    }

    // ---------------------------------------------
    // (challenge 2): odd
    // ---------------------------------------------
    calculateOdds() {
        
        // 
        var odds = this.array.reduce((cur, item) => {
            if (item % 2 == 1) cur += item;
            return cur;
        }, 0);

        // set a new variable to the class  
        this.odds = odds;

        // log    
        console.log(`Sum of Odds: ${odds}`);

    }
    
 

    // ---------------------------------------------
    // (challenge 3): even
    // ---------------------------------------------
    calculateEvens() {
        
        // 
        var evens = this.array.reduce((cur, item) => {
            if (item % 2 == 0) cur += item;
            return cur;
        }, 0);

        // set a new variable to the class  
        this.evens = evens; 

        // log
        console.log(`Sum of Evens: ${evens}`);

    }
 

    // ---------------------------------------------
    // l(Challenge 4): total- odds)) 
    // ---------------------------------------------
    calculate_SumMinusOdds() {
        console.log('Sum - odds:', this.total - this.odds);
    }

    // ---------------------------------------------
    // l(Challenge 5): total+ evens)) 
    // ---------------------------------------------
    calculate_SumPlusEvens() {
        console.log('Sum + evens:', this.total + this.evens);
    }

}


// ---------------------------------------------
// execute 
// ---------------------------------------------
var totalChall = new SolutionTwo();

// see the result in the console log (Challenge 1)
totalChall.calculateTotal()

// see the result in the console log (Challenge 2)
totalChall.calculateOdds()

// see the result in the console log (Challenge 3)
totalChall.calculateEvens()

// see the result in the console log (Challenge 4)
totalChall.calculate_SumMinusOdds()

// see the result in the console log (Challenge 5)
totalChall.calculate_SumPlusEvens()