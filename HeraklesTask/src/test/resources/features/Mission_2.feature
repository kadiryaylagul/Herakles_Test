Feature: Mission 2

  @wip
  Scenario: UI automation task
    Given Navigate to URL
    When Type "Heracles" in the search input field
    And Select "English" as the search language
    And Click the search button
    Then Validate that the first heading of the search results page matches "Heracles" (ignoring the case)
    And Verify that the search results page is available in "Español"
    And Validate that the search results page in the new language includes a link to the version in English