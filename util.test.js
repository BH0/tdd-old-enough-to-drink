const { countries } = require("./api"); 
const { confirmDrinkingAge } = require("./util"); 

test("should compare user's age against country age", () => {
    let oldEnough = confirmDrinkingAge("spain", 23); 
    expect(oldEnough).toBe("you are old enough to drink in spain"); 

    oldEnough = confirmDrinkingAge("spain", 2); 
    expect(oldEnough).toBe("you are not old enough to drink in spain"); 

    oldEnough = confirmDrinkingAge("countrydoesnotexist", 2); 
    expect(oldEnough).toBe("I am unaware of countrydoesnotexist"); 
}); 