package stepDefinition;

import static org.junit.Assert.assertFalse;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.PageFactory;

import com.testingshastra.pages.SignInPage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class SignInSteps {
	
	RemoteWebDriver driver;
	
	
	@Before(order=3)
	public void setupBrowser(){
		System.out.println("Setting up the browser");
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://facebook.com");	
	}	
	@Before(order=2)
	public void setupDb() {
		System.out.println("Setting up database");
	}
	@Before(order=1)
	public void setupFileServer() {
		System.out.println("Setting up File Server");
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}
	@Given("^User opens a chrome browser$")
	public void user_opens_a_chrome_browser() throws Throwable {

	}

	@Then("^User opens a Signin page$")
	public void user_opens_a_Signin_page() throws Throwable {
	}

	/*@When("^User enters {String} and {String}$")
	public void user_enters_username_and_password(String arg1, String arg2) throws Throwable {
		SignInPage sigin=PageFactory.initElements(driver, SignInPage.class);
		sigin.enterEmailOrPhone(arg1);
		sigin.enterPassword(arg2);
		sigin.clickOnLoginButton();
	}*/

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String arg1, String arg2) throws Throwable {
		SignInPage sigin=PageFactory.initElements(driver, SignInPage.class);
		sigin.enterEmailOrPhone(arg1);
		sigin.enterPassword(arg2);
		sigin.clickOnLoginButton();
	}
	
	@Then("^User should not be able to login$")
	public void user_should_not_be_able_to_login() throws Throwable {
		SignInPage sigin=PageFactory.initElements(driver, SignInPage.class);
		Assert.assertTrue(sigin.isErrorAppear());
	}
	
	
	@Then("^User should able to login$")
	public void user_should_be_able_to_login() {
		SignInPage sigin=PageFactory.initElements(driver, SignInPage.class);
		assertFalse("User is not able to signin",sigin.isErrorAppear());
	}
	

	

}
