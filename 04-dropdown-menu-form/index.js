const { Builder, By } = require("selenium-webdriver"); //, Key, until

const url =
  "https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form";
const driver = new Builder().forBrowser("chrome").build();

async function submitForm() {
  try {
    await driver.get(url);

    const select1 = await driver.findElement(
      By.xpath("//nb-select[@formcontrolname='select1']/button")
    );
    await select1.click();
    await driver.findElement(By.xpath("//nb-option[@value='1']")).click();
    await driver.findElement(By.xpath("//nb-option[@value='2']")).click();
    await select1.click();

    await driver
      .findElement(
        By.xpath(
          `//nb-select[@formcontrolname='select2']/option[@value="0: 'volvo'"]`
        )
      )
      .click();
    await driver
      .findElement(
        By.xpath(
          `//nb-select[@formcontrolname='select2']/option[@value="2: 'opel'"]`
        )
      )
      .click();

    const select3 = await driver.findElement(
      By.xpath("//nb-select[@formcontrolname='select3']/button")
    );
    await select3.click();
    await driver.findElement(By.xpath("//nb-option[@value='3']")).click();
    // await select3.click();

    const select4 = await driver.findElement(
      By.xpath("//nb-select[@formcontrolname='select4']")
    );
    await select4.click();
    await driver
      .findElement(
        By.xpath(
          "//nb-select[@formcontrolname='select4']/option[@value='audi']"
        )
      )
      .click();
    // await select4.click();

    await driver.findElement(By.id("submit")).click();
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
}

submitForm();
