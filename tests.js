// Unit tests for the helloWorld function
//describing helloworld function. spec defn is a function - houses all of the individual tests that exist in suite of test. each individual function is described by it. It function takes in string (description of individual test), function behind the individual test. "expect function" where building out the logic. (Expect: if entered into the console... to be: what we would expect returned)
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe("addOne", function () {
    it("should be a defined function", function () {
        expect(typeof addOne).toBe("function");
    });
    it("should return a number when called", function () {
        expect(typeof addOne()).toBe("number");
    })
    it("should return the number 3 when passed the argument of the number 2", function () {
        expect(addOne(2)).toBe(3);
    })
    it("should return the number -43 when passed the argument of the number -44", function () {
        expect(addOne(-44)).toBe(-43);
    })
    it("should return the number 18 when passed the argument of the number 17", function () {
        expect(addOne(17)).toBe(18);
    })
    it("should return the number -2.14 when passed the argument of the number -3.14", function () {
        expect(addOne(-3.14)).toBe(-2.14);
    })
    it("should return the number 4.58 when passed the argument of the number 3.58", function () {
        expect(addOne(3.58)).toBe(4.58);
    })
    it("should return NaN when passed the string 'Michael Jordan'", function () {
        expect(Number.isNaN(addOne("Michael Jordan"))).toBe(true);
    })
    it("should return NaN when passed the boolean true", function () {
        expect(Number.isNaN(addOne(true))).toBe(true);
    })
    it("should return NaN when passed the array [1,2,3]", function () {
        expect(Number.isNaN(addOne([1,2,3]))).toBe(true);
    })
});


describe("sayHello", function () {
    it("should be a defined function", function () {
        expect(typeof sayHello).toBe("function");
    })
    it("should return a string when called", function () {
        expect(typeof sayHello()).toBe("string");
    })
    it("should return the string 'Hello, Jane!' when executed", function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    })
    it("should return the string 'Hello, Alex!' when executed", function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
})






