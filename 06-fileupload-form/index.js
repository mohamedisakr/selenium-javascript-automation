const { Builder, By } = require("selenium-webdriver"); //, Key, until

const url =
  "https://rori4.github.io/selenium-practice/#/pages/practice/file-form";
const driver = new Builder().forBrowser("chrome").build();

async function submitForm() {
  try {
    await driver.get(url);

    await driver
      .findElement(By.xpath("//input[@formcontrolname='file']"))
      .sendKeys(`${__dirname}\\lecture-diagram-1.png`);

    await driver.findElement(By.id("submit")).click();
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
}

submitForm();
