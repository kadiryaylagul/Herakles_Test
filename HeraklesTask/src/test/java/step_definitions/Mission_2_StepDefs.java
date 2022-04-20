package step_definitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.pageActions.BasePage_Actions;
import pages.pageActions.ResultPage_Actions;
import utilities.ConfigurationReader;
import utilities.Driver;

public class Mission_2_StepDefs {

    BasePage_Actions basePageActions = new BasePage_Actions();
    ResultPage_Actions resultPageActions = new ResultPage_Actions();

    @Given("Navigate to URL")
    public void navigate_to_URL() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("Type {string} in the search input field")
    public void type_in_the_search_input_field(String str) throws InterruptedException {
        basePageActions.typeInSearchBox(str);
        Thread.sleep(3000);
    }

    @And("Select {string} as the search language")
    public void selectAsTheSearchLanguage(String language) {
        basePageActions.selectLanguage(language);
    }

    @When("Click the search button")
    public void click_the_search_button() {
        basePageActions.clickSearchButton();
    }

    @Then("Validate that the first heading of the search results page matches {string} \\(ignoring the case)")
    public void validate_that_the_first_heading_of_the_search_results_page_matches_ignoring_the_case(String heading) {
        Assert.assertEquals(heading.toLowerCase(), resultPageActions.getTextFirstHeading().toLowerCase());
    }

    @And("Verify that the search results page is available in {string}")
    public void verifyThatTheSearchResultsPageIsAvailableIn(String language) throws InterruptedException {
        resultPageActions.selectLanguageResultPage(language);
        resultPageActions.verifyResultPageInSelectedLanguage(language);
    }

    @Then("Validate that the search results page in the new language includes a link to the version in English")
    public void validate_that_the_search_results_page_in_the_new_language_includes_a_link_to_the_version_in_English() {
        resultPageActions.verifyTheLinkToEnglish();
    }


}
