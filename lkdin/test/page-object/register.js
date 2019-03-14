module.exports = {


    url:  function () {
      return this.api.launchUrl;
  },
    
      elements: {
        loginform: '.login-form',
        registerform: '#regForm',
        email:"#login-email",
        password:"#login-password",
        signin:"#login-submit", 
        password_link: ".link-forgot-password",
        mainheading: '.title',
        subheading: '.subtitle',
        login_details: '.login-form'
      },
      commands: [
        {
          isBodyDisplayed: function () {
            return this.navigate().waitForElementVisible('body',2000);
            
          },
          isDisplayedWithDelay: function (element) {
            return this.waitForElementPresent(element, 1000,function(){
              this.pause(200)
            });
          },
          isButtonClick: function(element){
            return this.waitForElementVisible(element,1000)
            .click(element,function(){
              this.pause(1000)
            })
          },
          enterCredentials: function(element) {
            return this.getAttribute(element,'checked', function(result){
              this.useXpath()
             .assert.visible("//INPUT[@id='login-email']")
             . assert.visible("//INPUT[@id='login-password']")
             .setValue("//input[@id='login-email']","abc@gmail.com")
             .setValue("//input[@id='login-password']","xyz")

             this.useCss()
            }
          )}
    }]
  } 