const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ppwyhc',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
