const { countries } = require("./api"); 

exports.confirmDrinkingAge = (country, age) => { 
    if (countries[country]) { 
        if (age >= countries[country]) { 
            return `you are old enough to drink in this is a test that should not pass and thus commit to master should fail ${country}`; 
        } else { 
            return `you are not old enough to drink in ${country}`;
        }
    } else { 
        return `I am unaware of ${country}`; 
    }
} 

