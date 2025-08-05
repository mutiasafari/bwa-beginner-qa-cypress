import * as element from "@helper/elements";
import * as route from "@helper/route";
import { ROUTES } from "@const/routes";

export class LoginPage {
  emailField = `input[name='email']`;
  passwordField = `input[name='password']`;
  loginButton = `button`;

  navigate() {
    route.visit(ROUTES.login);
    cy.title().should("eq", "React Gallery");
    cy.contains("Hello Again!");
  }

  verifyFieldEmail() {
    const email = element.get(this.emailField);
    email
      .should("be.visible")
      .and("have.attr", "type", "email")
      .and("have.attr", "placeholder", "Email Address");
  }

  verifyFieldPassword() {
    const password = element.get(this.passwordField);
    password
      .should("be.visible")
      .and("have.attr", "type", "password")
      .and("have.attr", "placeholder", "Password");
  }

  verifyButton() {
    const button = element.get(this.loginButton);
    button
      .should("be.visible")
      .and("contain", "Login")
      .and("have.css", "background-color", "rgb(79, 70, 229)")
      .and("have.css", "color", "rgb(255, 255, 255)");
  }

  login(user, pass) {
    this.navigate();
    element.fillField(this.emailField, user);
    element.fillField(this.passwordField, pass);
    element.click(this.loginButton);
  }
}

export default new LoginPage();
