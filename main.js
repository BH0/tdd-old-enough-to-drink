const { countries } = require("./api"); 
const { confirmDrinkingAge } = require("./util"); 

(() => { 
    window.onload = () => { 
        /// Pre-existing Elements 
        const countryInputEl = document.querySelector("#country"); 
        const userAgeInputEl = document.querySelector("#user-age"); 
        const confirmEl = document.querySelector("button"); 
        const resultEl = document.querySelectorAll("result")["strong"]; 

        /// Elements to be created at runtime 
        const paragraphEl = document.createElement("p"); 
        let output; 
            
        confirmEl.addEventListener("click", e => { 
            output = document.createTextNode(`\n${confirmDrinkingAge(countryInputEl.value, userAgeInputEl.value)}`); 
            paragraphEl.appendChild(output);  
            document.body.insertBefore(paragraphEl, resultEl); 
        }); 
    } 
})(); 