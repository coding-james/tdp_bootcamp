require("chromedriver"); // You WILL need to update chrome on the LoD
const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("automation tests", function () {
  this.timeout(60_000); 


  it("should find dress", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("http://automationpractice.com/index.php");
      const search = await driver.findElement(By.id("search_query_top"));
      await search.sendKeys("dress");
      // await search.sendKeys(Key.ENTER);
      await driver.findElement(By.css("#searchbox > button")).click();
      const result = await driver.findElement(By.css("#center_column > ul > li:nth-child(1) > div > div.right-block > h5 > a"));
      expect(await result.getText()).to.equal("Printed Summer Dress");
    } finally {
      await driver.quit();
    }
  })
});