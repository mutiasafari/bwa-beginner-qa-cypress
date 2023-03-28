/// <reference types="cypress"/>

export class LoginPage {
    navigate() {
        cy.visit("http://localhost:3000/");
        cy.title().should("eq", "React Gallery");
        cy.contains("Hello Again!");
    }

    verifyFieldEmail() {
        const email = cy.get("input[name='email']");
        email.should("be.visible");
        email.should("have.attr", "type", "email");
        email.should("have.attr", "placeholder", "Email Address");
    }

    verifyFieldPassword() {
        // example using .and in assertion .should
        const password = cy.get("input[name='password']");
        password
            .should("be.visible")
            .and("have.attr", "type", "password")
            .and("have.attr", "placeholder", "Password");
    }

    verifyButton() {
        // check button
        const button = cy.get("button");
        button
            .should("be.visible")
            .and("contain", "Login")
            .and("have.css", "background-color", "rgb(79, 70, 229)")
            .and("have.css", "color", "rgb(255, 255, 255)");
    }

    inputEmail(emailName) {
        const email = cy.get("input[name='email']");
        email.type(emailName);
    }

    inputPassword(password) {
        cy.get("input[name='password']").type(password);
    }

    clickButton() {
        const button = cy.get("button");
        button.click();
    }

    verifyAlertText(alertText) {
        cy.on("windows:alert", (text) => {
            expect(text).to.contains(alertText);
        });
    }

    verifyUrlEndPoint(endPoint) {
        cy.url().should("contain", endPoint);
    }
}

export default new LoginPage();
