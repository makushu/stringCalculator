
describe("add",function(){

    it ("should add two numbers given as strings", function(){
        expect(addNegative("3,4")).toBe(7);
    });


    it ("should add more than numbers given as strings", function(){
        expect(addNegative("1,2,3,4")).toBe(10);
    });


    it ("should add numbers with new line in the string", function(){
        expect(addNegative("1\n2,3")).toBe(6);
    });

    it ("should add numbers with different delimeters in the string", function(){
        expect(addNegative("//;\n1;2")).toBe(3);
    });
    

    it ("should add return 0 if string is empty", function(){
        expect(addNegative("")).toBe(0);
    });

    
    it("should allow delimiters of any length", () => {
        expect(() => { addNegative("-7,3") }).toThrowError();
    });


    it ("should allow multiple delimiters ", function(){
        expect(addNegative("//[*][%]\n1*2%3")).toBe(6);
    });


});

  
