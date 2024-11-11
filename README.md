# Kids Kuisine

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It provides a streamlined platform for parents to order after-school meals for their children, complete with subscription options and administrative management features.

## Project Structure

This project follows a modular and scalable file structure. Here’s an overview of the key directories:

-   **`@types`**: Contains global TypeScript type definitions for easy access across the app.
-   **`api`**: Houses API services for fetching and managing data.
-   **`app`**: Contains pages and routing (using Next.js App Router).
-   **`components`**: Holds reusable UI components.
-   **`constants`**: Stores fixed values like configuration settings, action types, or API endpoints.
-   **`hooks`**: Custom React hooks, including those for managing state and data fetching.
-   **`interfaces`**: TypeScript interfaces organized by domain, making type management easier.
-   **`store`**: Redux Toolkit store setup, with slices and middleware for state management.
-   **`utils`**: Utility functions used across the app.

## Getting Started

To get started with development, clone the repository, install dependencies, and run the development server.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed. The recommended version is Node.js 16 or higher.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/kids-kuisine.git
    ```

2. Navigate to the project directory:

    ```bash
    cd kids-kuisine
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

The development server will start at http://localhost:3000. You should be able to see the app in your browser.

## Features

-   Subscription options for after-school meals, including weekly, bi-weekly, and monthly plans.
-   Administrative management features, including adding, editing, and deleting meal items, as well as managing subscriptions and customers.
-   Order history and payment processing for customers.
-   User authentication and authorization using JWT tokens.
-   Customizable theme and layout options, including light and dark modes.

## Contributing

Contributions are welcome! Please open pull requests with your improvements or bug fixes. Be sure to follow the coding style and conventions used in the project.

## License

This project is licensed under the MIT License.

## Acknowledgments

This project was bootstrapped using [Create Next App](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and utilizes the following open-source libraries:

-   [Next.js](https://nextjs.org/) for the React framework.
-   [TypeScript](https://www.typescriptlang.org/) for static type checking.
-   [Redux Toolkit](https://redux-toolkit.js.org/) for managing state and data flow.
-   [Material-UI](https://material-ui.com/) for the UI components and styling.

Features

User Features

    •	Auth: Secure login with email/password and social login options.
    •	Subscription: Monthly meal subscription service.
    •	Order Management: Ability to place and view meal orders.
    •	Cart and Checkout: Complete cart and checkout experience with multiple payment methods.
    •	Support: Contact options for user assistance.

Admin Features

    •	Auth: Secure login for administrators.
    •	CRUD Operations: Full CRUD capabilities for managing meal options and user information.
    •	Dashboard: Displays key metrics, such as orders, subscriptions, and revenue.
    •	Notifications: Alerts for new orders and subscription renewals.

Testing

This project uses Vitest and Testing Library for testing.

Run tests with:

    npm run test

    •	Focus on high-level tests for pages and critical user flows.
    •	Use integration tests over unit tests for components with significant logic.
    •	Store reusable setup logic in __test__/setup.ts.ry.

Run E2E tests with:

    npm run e2e:run

    	•	Prioritize High-Level User Flows: Focus on essential pages and flows like login, checkout, and navigation.
    •	Use data-* Attributes for Stability: Use data-cy attributes to select elements, ensuring tests are resilient to CSS changes.
    •	Favor Assertions Over Hard Waits: Use .should() assertions instead of hard-coded cy.wait() to reduce flakiness.
    •	Leverage Custom Commands: Store repeated actions (like login) in cypress/support/commands.js for clean, reusable code.
    •	Organize with describe and it: Group tests logically for clear structure and easy identification.
    •	Stub Network Calls: Use cy.intercept() to mock API responses, improving test reliability and speed.
    •	Store Setup in beforeEach Hooks: Reuse setup logic (e.g., authentication) across tests in beforeEach.
    •	Capture Screenshots on Failure: Use cy.screenshot() for debugging failed test steps, especially on CI.
    •	Keep Tests Independent: Clear cookies and local storage between tests to prevent side effects.

Deployment

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Follow Next.js deployment documentation for more details.
