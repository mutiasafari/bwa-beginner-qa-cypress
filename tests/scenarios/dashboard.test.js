/// <reference types="cypress"/>

import dashboardPage from "@page/dashboard.page";
import loginPage from "@page/login.page";
import * as element from "@helper/elements";

describe("Dashboard Page Test Cases", () => {
  beforeEach(() => {
    loginPage.login("user@react.test", "password");
    element.verifyEndPointUrlContains("dashboard");
  });

  it("Found no post for the first time", () => {
    dashboardPage.verifyNumberOfPhoto(0);
  });

  it("Contains image url and description input and publish button", () => {
    dashboardPage.verifyFieldImageUrl();
    dashboardPage.verifyFieldDescription();
    dashboardPage.verifyButton();
  });

  it("Upload some photos", () => {
    const photos = [
      {
        imageValue:
          "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
        descriptionValue: "Image 1: Lorem Ipsum"
      },
      {
        imageValue:
          "https://plus.unsplash.com/premium_photo-1667423711627-0dccbfbbccf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        descriptionValue: "Image 2: Lorem Ipsum"
      }
    ];

    photos.forEach(({ imageValue, descriptionValue }) => {
      dashboardPage.inputImageUrl(imageValue);
      dashboardPage.inputDescription(descriptionValue);
      dashboardPage.clickPublishButton();
      element.verifyAlertContains("published!");

      // check uploaded image is exist
      dashboardPage.verifyContent(imageValue, descriptionValue);
    });

    dashboardPage.verifyNumberOfPhoto(photos.length);
  });
});
