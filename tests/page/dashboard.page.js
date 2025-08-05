import * as element from "@helper/elements";

class DashboardPage {
  imageField = `input[name='image']`;
  descriptionField = `input[name='desc']`;
  publishButton = `button`;

  verifyNumberOfPhoto(length) {
    cy.contains(`Found ${length} photos`);
  }

  verifyFieldImageUrl() {
    const image = element.get(this.imageField);
    image
      .should("be.visible")
      .and("have.attr", "type", "url")
      .and("have.attr", "required", "required")
      .and("have.attr", "placeholder", "Image URL");
  }

  verifyFieldDescription() {
    const description = element.get(this.descriptionField);
    description
      .should("be.visible")
      .and("have.attr", "type", "text")
      .and("have.attr", "required", "required")
      .and("have.attr", "placeholder", "What's on your mind?");
  }

  verifyButton() {
    const button = element.get(this.publishButton);
    button
      .should("be.visible")
      .and("have.css", "background-color", "rgb(79, 70, 229)")
      .and("have.css", "color", "rgb(255, 255, 255)")
      .contains("Publish!");
  }

  inputImageUrl(url) {
    element.fillField(this.imageField, url);
  }

  inputDescription(desc) {
    element.fillField(this.descriptionField, desc);
  }

  clickPublishButton() {
    element.click(this.publishButton);
  }

  verifyContent(img, desc) {
    cy.get("img").should("have.attr", "src", img);
    cy.contains(desc);
  }
}

export default new DashboardPage();
