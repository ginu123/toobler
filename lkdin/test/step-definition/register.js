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

Then(/^the page contains sign up form with title "(.*?)"$/, (title)=> {
  return register.isDisplayedWithDelay('@mainheading')
});


Then(/^contains a subtitle "(.*?)"$/, (title)=> {
  return register.isDisplayedWithDelay('@subheading')
});

Then(/^contains link "(.*?)"$/, (title)=> {
  return register.isDisplayedWithDelay('@password_link')
});

When(/^I enter the "(.*?)" and "(.*?)"$/, (title1, title2)=> {
  return register.enterCredentials('@email', '@password')
})
Then(/^I click on "(.*?)" button$/,(title) => {
  return register.isButtonClick('@signin')
});