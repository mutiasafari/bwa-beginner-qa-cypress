describe("Dashboard Page Test Cases", () => {
    it("Do login with correct values", () => {
        cy.visit("http://localhost:3000/");
        const email = cy.get("input[name='email']");
        email.type("user@react.test");

        const password = cy.get("input[name='password']");
        password.type("password");

        const button = cy.get("button");
        button.click();

        cy.on("windows:alert", (text) => {
            expect(text).to.contains("welcome");
        });

        cy.url().should("eq", "http://localhost:3000/dashboard");
    });

    it("Found no post for the first time", () => {
        cy.contains("Found 0 photos");
    });

    it("Contains image url and description input and publish button", () => {
        // check image
        const image = cy.get("input[name='image']");
        image.should("be.visible");
        image.should("have.attr", "type", "url");
        image.should("have.attr", "required", "required");
        image.should("have.attr", "placeholder", "Image URL");

        // check description
        const description = cy.get("input[name='desc']");
        description.should("be.visible");
        description.should("have.attr", "type", "text");
        description.should("have.attr", "required", "required");
        description.should("have.attr", "placeholder", "What's on your mind?");

        // check button
        const button = cy.get("button");
        button.should("be.visible");
        button.contains("Publish!");
        button.should("have.css", "background-color", "rgb(79, 70, 229)");
        button.should("have.css", "color", "rgb(255, 255, 255)");
    });

    it("Upload some photos", () => {
        const photos = [
            {
                imageValue:
                    "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                descriptionValue: "Image 1: Lorem Ipsum",
            },
            {
                imageValue:
                    "https://plus.unsplash.com/premium_photo-1667423711627-0dccbfbbccf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
                descriptionValue: "Image 2: Lorem Ipsum",
            },
        ];

        photos.forEach(({ imageValue, descriptionValue }) => {
            const image = cy.get("input[name='image']");
            image.type(imageValue);

            const description = cy.get("input[name='desc']");
            description.type(descriptionValue);

            const button = cy.get("button");
            button.click();

            // check uploaded image is exist
            cy.get("img").should("have.attr", "src", imageValue);
            cy.contains(descriptionValue);
        });

        cy.contains(`Found ${photos.length} photos`);
    });
});
