package pages.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class BasePage {
    public BasePage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id = "searchInput")
    public WebElement SEARCH_BOX;

    @FindBy(css = "button[type='submit']")
    public WebElement SEARCH_BUTTON;

    @FindBy(id = "searchLanguage")
    public WebElement LANGUAGE_BUTTON;
}
