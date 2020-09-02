const { Builder, By } = require("selenium-webdriver"); //, Key, until

const url =
  "https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form";
const driver = new Builder().forBrowser("chrome").build();

async function submitForm() {
  try {
    await driver.get(url);
    await driver.findElement(By.id("title")).sendKeys("QA Engineer");
    await driver
      .findElement(By.id("description"))
      .sendKeys("Software Quality Assurance Engineer");
    await (
      await driver.findElement(
        By.css("div:nth-child(2) > label > span.custom-control-indicator")
      )
    ).click();
    await driver.findElement(By.id("submit")).click();
    // await driver.wait(until.elementTextIs(),1000)
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
}

submitForm();
