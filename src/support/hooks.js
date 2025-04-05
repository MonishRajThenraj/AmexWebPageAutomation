const{After, Before,BeforeAll,AfterAll,AfterStep} = require('@cucumber/cucumber');
const {chromium, webkit, firefox} = require('@playwright/test');
const{fs} = require('fs');
const{path} = require('path');

let browser;
let context;
let page;

BeforeAll({timeout:100*1000},async function() {
    browser = await chromium.launch({headless:false});
});

Before({timeout:100*1000},async function() {
    context = await browser.newContext({viewport:{width:1280,height:720}});
    page = await context.newPage();
    global.page = page;
    global.context = context;
});

AfterStep({timeout:100*1000},async function({pickle,result}) {
    const screenshot = await page.screenshot({path:`./reports/screenshots/${pickle.name}.png`,fullPage:true});
    this.attach(screenshot,'image/png');
});

After({timeout:100*1000},async function() {
    await context.close();
});