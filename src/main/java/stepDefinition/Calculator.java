package stepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Calculator {
	int x,y,result;
	@Given("^I have a number (\\d+)$")
	public void m1(int arg1) throws Throwable {
		x=arg1;
	}
	
	@And("^I have another number (\\d+)$")
	public void m2(int arg1) {
		y=arg1;
	}
	
	@Then("^Add two numbers$")
	public void add_two_numbers() throws Throwable {
		result=x+y;
	}

	@Then("^Display Result$")
	public void display_Result() throws Throwable {
		System.out.println("Result: "+result);
	}
}
