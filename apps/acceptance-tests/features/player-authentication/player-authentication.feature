Feature: Player authentication

  Scenario: Authenticate an existing player
    Given user is authenticated with an external account
    And player exists on game platform for this user
    When player authentication is requested
    Then current player will be updated
    And authentication status will be updated
