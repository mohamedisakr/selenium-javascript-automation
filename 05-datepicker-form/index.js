const { Builder, By } = require("selenium-webdriver"); //, Key, until

const url =
  "https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form";
const driver = new Builder().forBrowser("chrome").build();

async function submitForm() {
  try {
    await driver.get(url);

    await driver
      .findElement(By.xpath("//input[@formcontrolname='dateOne']"))
      .sendKeys("Apr 24, 2020");

    await driver
      .findElement(By.xpath("//input[@formcontrolname='dateTwo']"))
      .sendKeys("Apr 1, 2020 - Apr 24, 2020");

    await driver.findElement(By.id("submit")).click();
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
}

submitForm();
