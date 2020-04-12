@Smoke
Feature: Signin Feature


	
Scenario Outline: Check the behaviour when user enters valid username and invalid password	
	When User enters "<username>" and "<password>"
	Then User should not be able to login
	Examples:
		|username|password|
		|avinash|test@123|
		|aviansh|test@1234|
		|avinash|test@12345|
		
	