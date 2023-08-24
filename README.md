# Playwright End-to-End Testing Project with Github Actions

Welcome to the Playwright End-to-End (E2E) Testing project! This repository contains E2E tests using Playwright and TypeScript to test a web application. The application under test is hosted at [https://the-internet.herokuapp.com/login](https://the-internet.herokuapp.com/login).

## Prerequisites

Before running the tests, ensure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) version 18.10.0 or later
- [npm](https://www.npmjs.com/) (for dependency management)

## Getting Started

1. Clone this repository and navigate to the project folder:

    ```sh
    git clone <repository_url>
    cd playwright-actions-sample
    ```

2. Install project dependencies using npm:

    ```sh
    npm install
    ```

3. Install playwright:

    ```sh
    npx playwright install
    ```    

4. Run the end-to-end tests:

    ```sh
    npx playwright test
    ```

   This command will execute the Playwright tests against the target web application.

## Target Application

The tests are designed to run against the web application available at [https://the-internet.herokuapp.com/login](https://the-internet.herokuapp.com/login). This is the application that will be tested for end-to-end functionality.

## GitHub Actions

The project includes a workflow configuration located at `.github/workflows/playwright.yml` which utilizes GitHub Actions. This workflow is intended to provide hands-on practice with GitHub Actions for continuous integration and automation.

## Contributing

Contributions are welcome! If you find any issues or improvements, please submit a pull request or create an issue.

## License

This project is licensed under the [MIT License](LICENSE).

