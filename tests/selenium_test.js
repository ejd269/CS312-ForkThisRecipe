import {Builder, By, until} from 'selenium-webdriver';

async function run() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3000/submit');
    await driver.findElement(By.id('title')).sendKeys('Test Recipe');
    await driver.findElement(By.id('tags')).sendKeys('tag');
    await driver.findElement(By.id('ingredients')).sendKeys('ing');
    await driver.findElement(By.id('instructions')).sendKeys('instr');
    await driver.findElement(By.css('#recipe-form button[type=submit]')).click();

    await driver.wait(until.elementLocated(By.css('h2')), 5000);

    await driver.get('http://localhost:3000/recipes/1');
    await driver.findElement(By.id('rating')).sendKeys('5');
    await driver.findElement(By.id('text')).sendKeys('Great');
    await driver.findElement(By.css('form button[type=submit]')).click();

    await driver.wait(until.elementLocated(By.css('li')), 5000);
    console.log('Selenium tests passed');
  } finally {
    await driver.quit();
  }
}

run();
