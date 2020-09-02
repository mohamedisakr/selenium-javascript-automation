const { Builder, By } = require("selenium-webdriver"); //, Key, until

const url =
  "https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form";
const driver = new Builder().forBrowser("chrome").build();

async function submitForm() {
  try {
    await driver.get(url);
    await driver.findElement(By.id("name")).sendKeys("Mohamed Hassan");
    await driver.findElement(By.id("comment")).sendKeys("This is awosome");
    await driver
      .findElement(
        By.xpath("//input[@value='presedential-suite']/following::span")
      )
      .click();

    await driver
      .findElement(By.xpath("//nb-checkbox[@value='breakfast']/label/span"))
      .click();
    await driver
      .findElement(By.xpath("//nb-checkbox[@value='lunch']/label/span"))
      .click();
    await driver.findElement(By.id("submit")).click();
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
}

submitForm();
