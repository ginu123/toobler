const { client } = require('nightwatch-cucumber');

const { Given, Then, When } = require('cucumber');

const register = client.page.register();

Given(/^I am on the home page$/, () => {
  return register.isBodyDisplayed();
});


Then(/^the home page exists$/,() => { 
    return register.isDisplayedWithDelay('@registerform');
});

//Then(/^the page contains title "(.*?)"$/,(title) => {
  //  return register.isDisplayedWithDelay('@title');
//}); 


Then(/^contains "(.*?)" textbox$/,(title) => {
  return register.isDisplayedWithDelay('@email');
});

Then(/^contains the "(.*?)" textbox$/,(title) => {
  return register.isDisplayedWithDelay('@password');
});

Then(/^contains button "(.*?)" button$/,(title) => {
  return register.isDisplayedWithDelay('@signin');
});

Then(/^I click on "(.*?)" button$/,(title) => {
  return register.isButtonClick('@signin')
});
