// https://github.com/JHarry444/TDP-Sept-React 

require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Exercise tests", function () {
  this.timeout(30_000);

  //Mile / KM Tests
  it("Convert Miles to Km", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("http://localhost:3000/testing/ex1");
      const search = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
      await search.sendKeys(6.3);
      await search.sendKeys(Key.ENTER);
      const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
      expect(await result.getAttribute("value")).to.equal("10.08");
    } finally {
      await driver.quit();
    }
  })

  it("Convert Km to Miles", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("http://localhost:3000/testing/ex1");
      const search = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
      await search.sendKeys(20);
      await search.sendKeys(Key.ENTER);
      const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
      expect(await result.getAttribute("value")).to.equal("12.5");
    } finally {
      await driver.quit();
    }
  })

  // Counter Tests
  it("Counter - It should equal 3", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("http://localhost:3000/testing/ex2");
      await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(4)")).click(); //+1 Button
      await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(4)")).click(); //+1 Button
      await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(4)")).click(); //+1 Button
      const result = await driver.findElement(By.css("#root > div > div.container > div.input-group > input"));
      expect(await result.getAttribute("value")).to.equal("3");
    } finally {
      await driver.quit();
    }
  })

  it("Counter - It should equal 6", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("http://localhost:3000/testing/ex2");
      await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(4)")).click();  //+1 Button
      await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(5)")).click();  //+5 Button
      const result = await driver.findElement(By.css("#root > div > div.container > div.input-group > input"));
      expect(await result.getAttribute("value")).to.equal("6");
    } finally {
      await driver.quit();
    }
  })

  it("Counter - It should equal 9", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("http://localhost:3000/testing/ex2");
      await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(4)")).click();  //+1 Button
      await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(5)")).click();  //+5 Button
      await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(5)")).click();  //+5 Button
      await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(5)")).click();  //+5 Button
      await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(1)")).click();  //-5 Button
      await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(2)")).click();  //-1 Button
      await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(2)")).click();  //-1 Button
      const result = await driver.findElement(By.css("#root > div > div.container > div.input-group > input"));
      expect(await result.getAttribute("value")).to.equal("9");

    } finally {
      await driver.quit();
    }
  })

  it("Counter - It should equal -11", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("http://localhost:3000/testing/ex2");
      await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(1)")).click();  //-5 Button
      await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(1)")).click();  //-5 Button
      await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(2)")).click();  //-1 Button
      const result = await driver.findElement(By.css("#root > div > div.container > div.input-group > input"));
      expect(await result.getAttribute("value")).to.equal("-11");

      // Check History
      // const historyResult1 = await driver.wait(until.elementLocated(By.css("#root > div > div.container > div:nth-child(5) > p:nth-child(1)")));
      // expect(await historyResult1.getText()).to.equal("-5");
      // const historyResult2 = await driver.wait(until.elementLocated(By.css("#root > div > div.container > div:nth-child(5) > p:nth-child(2)")));
      // expect(await historyResult2.getText()).to.equal("-10");
      // const historyResult3 = await driver.wait(until.elementLocated(By.css("#root > div > div.container > div:nth-child(5) > p:nth-child(3)")));
      // expect(await historyResult3.getText()).to.equal("-11");

      const historyResult3 = document.querySelectorAll("div > div.container > div:nth-child(5) > p");;
      expect(historyResult3).to.equal("-5,-10,-11");

    } finally {
      await driver.quit();
    }
  })



  // Film Tests
  it("Search Film - Return Star Wars A New Hope", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("http://localhost:3000/testing/ex3");
      const search = await driver.findElement(By.id("filmTitle"));
      await search.sendKeys("Star Wars");
      await search.sendKeys(Key.ENTER);
      const result = await driver.wait(until.elementLocated(By.css("#root > div > div.container > div.container > div > div:nth-child(1) > div > div > div")));
      expect(await result.getText()).to.equal("Star Wars: Episode IV - A New Hope");
    } finally {
      await driver.quit();
    }
  })

  it("Search Film (Click Search) - Return Star Wars A New Hope", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("http://localhost:3000/testing/ex3");
      const search = await driver.findElement(By.id("filmTitle"));
      await search.sendKeys("Star Wars");
      await driver.findElement(By.css("#root > div > div.container > form > div > div > button")).click();
      const result = await driver.wait(until.elementLocated(By.css("#root > div > div.container > div.container > div > div:nth-child(1) > div > div > div")));
      expect(await result.getText()).to.equal("Star Wars: Episode IV - A New Hope");
    } finally {
      await driver.quit();
    }
  })

  it("Search Film (Enter Key) and See Details - Matrix", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("http://localhost:3000/testing/ex3");
      const search = await driver.findElement(By.id("filmTitle"));
      await search.sendKeys("Matrix");
      await search.sendKeys(Key.ENTER);
      await driver.wait(until.elementLocated(By.css("#root > div > div.container > div.container > div > div:nth-child(1) > div"))).click();
      const result = await driver.wait(until.elementLocated(By.css("#root > div > div:nth-child(3) > div > div > div")));
      expect(await result.getText()).to.equal("The Matrix");
    } finally {
      await driver.quit();
    }
  })

});