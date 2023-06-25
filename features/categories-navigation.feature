Feature:

  Scenario Outline: Categories navigation
    Given I am logged out user on main page
    When I "<select>" a category
    Then I am redirected to proper "<endpoint>" and "<category>" is changed

    Examples:
      | select | category      | endpoint       |
      | 0      | New In        | new-in/        |
      | 1      | Demo Category | demo-category/ |
      | 2      | Clothes       | clothes/       |
      | 3      | Accessories   | accessories/   |
      | 4      | Jewellery     | jewellery/     |
      | 5      | Shoes         | shoes/         |
      | 6      | Sale          | sale/          |