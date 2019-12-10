describe('Javabuzz', function() {
    // JS looks up the scope chain; if it can't find javabuzz it will create it for you - 
    //and because it has been created at the top level, it becomes a global variable, 
    //available to every function in the program, which is generally considered a 'bad thing'. 
    //It's bad because if other JavaScript libraries use the same name in the global variable space, 
    //your program will break, so use var!
    
    var javabuzz;

    //instantiating the 'class'

    beforeEach(function() {
        javabuzz = new Javabuzz();
    });

    describe('knows when a number', function () {
        it('is divisible by 3', function() {
            expect(javabuzz.isDivisibleByThree(3)).toBe(true);
        });
    });

    describe('knows when a number is NOT' function() {
        it('divisible by 3', function () {
            expect(javabuzz.isDivisibleByThree(1)).toBe(false);
        });
    });
});