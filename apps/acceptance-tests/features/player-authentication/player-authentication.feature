Feature: Player authentication

  Background:
    Given a user is authenticated with external account

  Rule: An authenticated unregistered user must complete registration

    Scenario: Authenticate an unregistered user
      Given user is not registered yet
      When player authentication is requested
      Then the authentication status will be "UNREGISTERED"

  Rule: An authenticated registered player can access the platform

    Scenario: Authenticate a registered player
      Given a player is associated with the authenticated external account
      When player authentication is requested
      Then the player will be authenticated
