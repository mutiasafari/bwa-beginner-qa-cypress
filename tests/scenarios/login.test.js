import loginPage from "@page/login.page";
import * as element from "@helper/elements";
import { ROUTES } from "@const/routes";

describe("Login Page Test Case", () => {
  beforeEach(() => {
    loginPage.navigate();
  });

  it("Contains Email and Password Input, and Login Button", () => {
    loginPage.verifyFieldEmail();
    loginPage.verifyFieldPassword();
    loginPage.verifyButton();
  });

  it("Do login with null value", () => {
    element.click(loginPage.loginButton);
    element.verifyAlertContains("login failed");
  });

  it("Do login with wrong values", () => {
    loginPage.login("wrong@react.test", "password");
    element.verifyAlertContains("login failed");
  });

  it("Do login with correct values", () => {
    loginPage.login("user@react.test", "password");
    element.verifyAlertContains("welcome");
    element.verifyEndPointUrlContains(ROUTES.dashboard);
  });
});
