const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://skleptest.pl/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
