Feature: Player authentication

  Scenario: Authenticate an existing player
    Given user is authenticated with an external account
    And player exists on game platform for this user
    When player authentication is requested
    Then current player will be updated

  Scenario: Require registration for an unknown player
    Given user is authenticated with an external account
    And no player exists on game platform for this user
    When player authentication is requested
    Then player registration will be required
