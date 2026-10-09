\# Playwright QA Automation Framework



A UI and API test automation project built using \*\*Playwright, TypeScript, and Node.js\*\*.



\## Project Overview



This project demonstrates software testing concepts, including UI automation, API testing, Page Object Model (POM), data-driven testing, fixtures, hooks, and automated test reporting.



\## Tech Stack



\- Playwright Test

\- TypeScript

\- Node.js

\- Allure Reports

\- Git and GitHub

\- GitHub Actions



\## Project Structure



```text

QA/

├── .github/

│   └── workflows/

│       └── playwright.yml

├── fixtures/

├── pages/

├── setup/

├── test-data/

├── tests/

│   ├── api/

│   ├── demo/

│   └── ui/

├── playwright.config.ts

├── tsconfig.json

├── package.json

└── README.md

```



\## Features



\- UI automation using Playwright

\- API testing

\- Page Object Model (POM)

\- Data-driven tests using JSON

\- Reusable fixtures and test hooks

\- Screenshots, videos, and traces for debugging

\- HTML and Allure test reports

\- GitHub Actions CI workflow



\## Prerequisites



\- Node.js

\- npm

\- Java 21 for Allure report generation



\## Installation



Clone the repository:



```bash

git clone https://github.com/Amitpatel972/playwright-qa-automation.git

cd playwright-qa-automation

```



Install dependencies and the Chromium browser:



```bash

npm ci

npx playwright install chromium

```



\## Run Tests



List available tests:



```bash

npx playwright test --list

```



Run the test suite:



```bash

npx playwright test

```



Run UI tests:



```bash

npx playwright test tests/ui

```



Run API tests:



```bash

npx playwright test tests/api

```



Open the Playwright HTML report:



```bash

npx playwright show-report

```



Generate the Allure report:



```bash

npx allure generate allure-results --clean -o allure-report

npx allure open allure-report

```



\## Continuous Integration



A GitHub Actions workflow is configured in `.github/workflows/playwright.yml` to install dependencies, run Playwright tests, generate reports, and upload test artifacts.



\## Author



\*\*Amit Patel\*\*



GitHub: https://github.com/Amitpatel972



