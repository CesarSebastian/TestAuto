const{Builder, By, Key, unitil, until} = require ('selenium-webdriver');

(async function example(){
    let driver = await new Builder().forBrowser('firefox').build();
    try{
        await driver.get('https://www.google.com/');
        await driver.findElement(By.name('q')).sendKeys('Nintendo', Key.RETURN);
        await driver.wait(until.titleIs('Nintendo - Google Search'), 1000);
    }finally{
        await driver.quit();
    }
})();