$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Mission_1.feature");
formatter.feature({
  "name": "Mission 1",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Write a function taking an array of String as parameter and return an array with the String ordered by length.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Sort the following elements according to length of elements",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Mission_1_StepDefs.sort_the_following_elements_according_to_length_of_elements(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Mission_2.feature");
formatter.feature({
  "name": "Mission 2",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "UI automation task",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to URL",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Mission_2_StepDefs.navigate_to_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type \"Heracles\" in the search input field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Mission_2_StepDefs.type_in_the_search_input_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"English\" as the search language",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Mission_2_StepDefs.selectAsTheSearchLanguage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Mission_2_StepDefs.click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate that the first heading of the search results page matches \"Heracles\" (ignoring the case)",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Mission_2_StepDefs.validate_that_the_first_heading_of_the_search_results_page_matches_ignoring_the_case(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that the search results page is available in \"Español\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Mission_2_StepDefs.verifyThatTheSearchResultsPageIsAvailableIn(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate that the search results page in the new language includes a link to the version in English",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Mission_2_StepDefs.validate_that_the_search_results_page_in_the_new_language_includes_a_link_to_the_version_in_English()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});