const { Builder, By, Key } = require("selenium-webdriver"); //, until

const url =
  "https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form";
const driver = new Builder().forBrowser("chrome").build();

async function submitForm() {
  try {
    await driver.get(url);

    await driver.switchTo().frame(0);

    await driver
      .findElement(By.xpath("//input[@aria-label='Name']"))
      .sendKeys("Mariam Hassan");

    await driver.actions().sendKeys(Key.TAB).perform();

    await driver
      .actions()
      .sendKeys(
        Key.chord(
          Key.ARROW_DOWN,
          Key.ARROW_DOWN,
          Key.ARROW_DOWN,
          Key.ARROW_DOWN
        )
      )
      .perform();

    await driver.actions().sendKeys(Key.chord(Key.TAB, Key.TAB)).perform();

    await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
    await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
    await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();

    await driver.actions().sendKeys(Key.chord(Key.SPACE)).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, "04")).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, "24")).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, "2020")).perform();

    await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
    await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();

    await driver
      .actions()
      .sendKeys(Key.chord(Key.TAB, "my answer is secret"))
      .perform();

    await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
}

submitForm();
