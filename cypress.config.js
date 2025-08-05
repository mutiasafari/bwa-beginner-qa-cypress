const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  video: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  env: {
    base_url: "http://localhost:3000"
  },
  e2e: {
    setupNodeEvents(on) {
      // implement node event listeners here
      let options = browserify.defaultOptions;
      options.browserifyOptions.transform[1][1].plugins.push([
        "module-resolver",
        {
          alias: {
            "@tests": "./tests",
            "@helper": "./tests/helper",
            "@page": "./tests/page",
            "@data": "./tests/data",
            "@const": "./tests/const"
          }
        }
      ]);
      on("file:preprocessor", browserify(options));
    },
    specPattern: "tests/scenarios/**/*.test.js"
  }
});
