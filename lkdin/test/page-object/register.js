module.exports = {


    url:  function () {
      return this.api.launchUrl;
  },
    
      elements: {
        loginform: '.login-form',
        registerform: '#regForm',
        mainheading: '.title',
        subheading: '.subtitle',
        email:"#login-email"

   
  
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
          }
          
        }]
    }