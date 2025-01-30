import { Given, When, Then } from '@wdio/cucumber-framework';

import loginPage from '../pageobjects/login.page.js';

const pages = {
    login: loginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login without username and password$/, async () => {
    await loginPage.login()
});

Then(/^I should see a message saying (.*)$/, async (message) => {
    await expect(loginPage.errorMsg).toBeExisting();
    await expect(loginPage.errorMsg).toHaveText(expect.stringContaining(message));
});

