const { Builder, By, Key, until } = require("selenium-webdriver");

const url =
  "https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration";
const driver = new Builder().forBrowser("chrome").build();

async function submitForm() {
  try {
    await driver.get(url);
    await driver.findElement(By.id("email")).sendKeys("someone@anydomain.com");
    await driver.findElement(By.id("password")).sendKeys("anydomain.com");
    await driver.findElement(By.id("submit")).click();
    // await driver.wait(until.elementTextIs(),1000)
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
}

submitForm();

/*
(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://www.google.com/ncr");
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
  } catch (err) {
    console.log(err);
  } finally {
    await driver.quit();
  }
})();
*/
