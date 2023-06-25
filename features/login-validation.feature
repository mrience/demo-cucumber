Feature: Login

  Scenario Outline: Login validation
    Given I am logged out user on main page
    When I select login and submit login form with "<email>" and "<password>"
    Then I can see validation "<error>"

    Examples:
      | email | password | error                                                         |
      |       |          | PLEASE ENTER AN EMAIL ADDRESS                                 |
      | email |          | PLEASE ENTER A PASSWORD                                       |
      |       | password | PLEASE ENTER AN EMAIL ADDRESS                                 |
      | email | password | YOUR EMAIL AND PASSWORD WERE NOT RECOGNISED, PLEASE TRY AGAIN |
