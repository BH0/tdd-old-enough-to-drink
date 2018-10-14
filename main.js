const { countries } = require("./api"); 
const { confirmDrinkingAge } = require("./util"); 

(() => { 
    window.onload = () => { 
        /// Pre-existing Elements 
        const countryInputEl = document.querySelector("#country"); 
        const userAgeInputEl = document.querySelector("#user-age"); 
        const confirmEl = document.querySelector("button"); 
        const resultEl = document.querySelectorAll("result")["strong"]; 
        let paragraphEl;  
        let output; 

        confirmEl.addEventListener("click", e => { 
            paragraphEl = document.createElement("p");
            output = document.createTextNode(`\n${confirmDrinkingAge(countryInputEl.value, userAgeInputEl.value)}`); 
            paragraphEl.appendChild(output);  
            // paragraphEl.classList.add("user-output"); 
            document.body.insertBefore(paragraphEl, resultEl); 
        }); 
    } 
})(); 