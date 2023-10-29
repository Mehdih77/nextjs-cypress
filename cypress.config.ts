import { defineConfig } from "cypress";
import path from "path";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
      webpackConfig: {
        resolve: {
          alias: {
            "@components": path.resolve(__dirname, "./components"),
          },
        },
      },
    },
  },
  env: {
    email: "test",
    username: "email8@email.com",
    password: "1234888",
  },
});

//! the env data in "cypress.env.json" file, will overwrite the env in here
