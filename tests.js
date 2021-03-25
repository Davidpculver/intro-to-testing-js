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
    it('should return the string "Hello, World!', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return "please enter a valid name"', function () {
        expect(sayHello(5)).toBe("Please enter a valid name.")
    });
    it('should return "please enter a valid name"', function () {
        expect(sayHello(2.5)).toBe("Please enter a valid name.")
    });
    it('should return "please enter a valid name"', function () {
        expect(sayHello('')).toBe("Please enter a valid name.")
    });
})

describe("isFive", function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean no matter what is input', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when 5 is input', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when the string of 5 is input', function () {
        expect(isFive("5")).toBe(true);
    });
})

describe("isEven", function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean no matter what is input', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when 2 is input', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when -4 is input', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when 3 is input', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when the string "banana" is input', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when the string "8" is input', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when Infinity is input', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when a boolean is input', function () {
        expect(isEven(Boolean)).toBe(false);
    });
    it('should return false when nothing is input', function () {
        expect(isEven()).toBe(false);
    });
})

describe("isVowel", function (){
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should always return a boolean', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when the string "a" is input', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when the string "A" is input', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when the string "y" is input', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when the number 4 is input', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when a boolean is input', function () {
        expect(isVowel(Boolean)).toBe(false);
    });
    it('should return false when the string "banana" is input ', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when an empty string is input', function () {
        expect(isVowel('')).toBe(false);
    });
})




