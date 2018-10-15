const puppeteer = require("puppeteer"); 

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


const pathTo = "file:///C:/Users/User/webapps/react/oldenough/"; // replace this with the complete local-path  to the web-page (index.html) you wish to test 
test("should create an element with paragraph containing results of user's input" , async () => { 
    const browser = await puppeteer.launch({
        headless: false, 
        slowMo: 30, 
        args: ['--window-size=1920,1080', '--no-sandbox', '--disable-setuid-sandbox'] 
    }); 
    const page = await browser.newPage(); 
    // await page.goto(`${__dirname}/index.html`); 
    console.log(`${__dirname}`); 
    // await page.goto(`file:///C:/Users/User/webapps/react/oldenough/index.html`); 

    await page.click("input#country"); 
    await page.type("input#country", "spain");
    await page.click("input#user-age"); 
    await page.type("input#user-age", "23");
    await page.click("button"); 

    // const finalText = await page.$eval(".result strong p", el => el.textContent); 
    const finalText = await page.$eval("p", el => el.textContent); 
    expect(finalText).toBe("\nyou are old enough to drink in spain"); 
}, 15000); 