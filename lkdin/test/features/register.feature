#features/register.feature

#  @register @Task1

Feature: User Registration

  As a User
  I want to register to LinkedIn
  In order to access different features

Scenario: Display home page header elements 

  Given I am on the home page
  And the home page exists   
  And contains "Email or phone number" textbox 
  And contains "Password" textbox 
  And contains button "Sign in" button
  And contains link "Forgot password?" link
  

Scenario: Display Sign Up form 

  Given I am on the home page
  And the home page exists
  And the page contains sign up form with title "Be great at what you do"
  And contains a subtitle "Get started - it's free."

Scenario: Enter the login details

  Given I am on the home page
  And the home page exists
  When I enter the "email" and "password"
  Then I click on "Sign in" button