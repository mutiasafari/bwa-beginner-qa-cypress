/// <reference types="cypress"/>
import loginPage from "../pages/login-page";

describe("Login Page Test Case", () => {
    beforeEach(() => {
        loginPage.navigate();
    });

    it.only("Contains Email and Password Input, and Login Button", () => {
        loginPage.verifyFieldEmail();
        loginPage.verifyFieldPassword();
        loginPage.verifyButton();
    });

    it("Do login with null value", () => {
        loginPage.clickButton();
        loginPage.verifyAlertText("login failed");
    });

    it("Do login with wrong values", () => {
        loginPage.inputEmail("wrong@react.test");
        loginPage.inputPassword("password");
        loginPage.clickButton();
        loginPage.verifyAlertText("login failed");
    });

    it("Do login with correct values", () => {
        loginPage.inputEmail("user@react.test");
        loginPage.inputPassword("password");
        loginPage.clickButton();
        loginPage.verifyAlertText("welcome");
        loginPage.verifyUrlEndPoint("dashboard");
    });
});
