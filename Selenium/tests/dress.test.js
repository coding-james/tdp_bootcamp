require("chromedriver"); // You WILL need to update chrome on the LoD
const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("automation tests", function () {
  this.timeout(180_000); 


  // it("should find dress", async () => {
  //   const driver = await new Builder().forBrowser("chrome").build();
  //   try {
  //     await driver.get("http://automationpractice.com/index.php");
  //     const search = await driver.findElement(By.id("search_query_top"));
  //     await search.sendKeys("dress");
  //     // await search.sendKeys(Key.ENTER);
  //     await driver.findElement(By.css("#searchbox > button")).click();
  //     const result = await driver.findElement(By.css("#center_column > ul > li:nth-child(1) > div > div.right-block > h5 > a"));
  //     expect(await result.getText()).to.equal("Printed Summer Dress");
  //   } finally {
  //     await driver.quit();
  //   }
  // })

  // it("should add dress to basket", async () => {
  //   const driver = await new Builder().forBrowser("chrome").build();
  //   try {
  //     await driver.get("http://automationpractice.com/index.php");
  //     const search = await driver.findElement(By.id("search_query_top"));
  //     await search.sendKeys("dress");
  //     // await search.sendKeys(Key.ENTER);
  //     await driver.findElement(By.css("#searchbox > button")).click();
  //     await driver.findElement(By.css("#center_column > ul > li:nth-child(1) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default")).click();
  //     await driver.findElement(By.css("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a")).click();
  //     const result = await driver.findElement(By.css("#product_5_19_0_0 > td.cart_description > p > a"));
  //     expect(await result.getText()).to.equal("Printed Summer Dress");

  //   } finally {
  //     await driver.quit();
  //   }

    it.skip("should add cat food to basket", async () => {
      const driver = await new Builder().forBrowser("chrome").build();
      try {
        await driver.get("https://www.petsathome.com/");
        const search = await driver.findElement(By.id("SimpleSearchForm_SearchTerm"));
        await search.sendKeys("Whiskas Complete Dry Adult Cat Food Biscuits");
        // await search.sendKeys(Key.ENTER);
        await driver.findElement(By.id("search_submit")).click();
        await driver.findElement(By.id("pListBtn7120393P")).click();
        await driver.findElement(By.css("#containerModal > header > section.dth-secondary > div > section.dth-basket.-js-basket-trigger > p")).click();
        await driver.findElement(By.id("GotoCartButtonFromMiniBasket")).click();
        const result = await driver.findElement(By.css("#OrderLinesDisplay > section > div.basket-product__inner > div.basket-product__details > div.basket-product__details-row-1 > div.basket-product__description-wrap > h4 > a"));
        expect(await result.getText()).to.equal("Whiskas Complete Dry Adult Cat Food Biscuits Chicken 7kg");
  
      } finally {
        await driver.quit();
      }

  })

});