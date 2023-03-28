/// <reference types='cypress'/>

class DashboardPage {
    verifyNumberOfPhoto(length) {
        cy.contains(`Found ${length} photos`);
    }

    verifyFieldImageUrl() {
        const image = cy.get("input[name='image']");
        image.should("be.visible");
        image.should("have.attr", "type", "url");
        image.should("have.attr", "required", "required");
        image.should("have.attr", "placeholder", "Image URL");
    }

    verifyFieldDescription() {
        const description = cy.get("input[name='desc']");
        description.should("be.visible");
        description.should("have.attr", "type", "text");
        description.should("have.attr", "required", "required");
        description.should("have.attr", "placeholder", "What's on your mind?");
    }

    verifyButton() {
        const button = cy.get("button");
        button.should("be.visible");
        button.contains("Publish!");
        button.should("have.css", "background-color", "rgb(79, 70, 229)");
        button.should("have.css", "color", "rgb(255, 255, 255)");
    }

    inputImageUrl(url) {
        const image = cy.get("input[name='image']");
        image.type(url);
    }

    inputDescription(desc) {
        const description = cy.get("input[name='desc']");
        description.type(desc);
    }

    clickButton() {
        const button = cy.get("button");
        button.click();
    }

    verifyContent(img, desc) {
        cy.get("img").should("have.attr", "src", img);
        cy.contains(desc);
    }
}

export default new DashboardPage();
