# cortez-cypress-exam
# Quiz App Automated Registration Tests

This project contains Cypress-based end-to-end tests for user registration on the [Quiz App](https://testautomation-ph-quiz-app.vercel.app). It uses the `@faker-js/faker` library to dynamically generate user data and covers both **Quiz Master** and **Regular User** roles, including a negative test case.

---

## 📁 Project Structure

├── cypress/
│ ├── e2e/
│ │ └── registration.cy.js # Cypress test cases
│ └── support/
│ └── faker-util.js # Fake user data generator
├── README.md


---

## 🧰 Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Cypress](https://www.cypress.io/)
- Internet connection to access the deployed quiz app

---

## ⚙️ Setup & Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd your-repo-name

Install dependencies
npm install

Run Cypress
npx cypress open

🚀 Test Execution
You can run the test either via the Cypress GUI or in headless mode:

GUI (Interactive Mode)
npx cypress open

Select the registration.cy.js spec file.
🧪 Test Scenarios
✅ Quiz Master Registration
Fills the form with valid quiz_master role data.

Verifies redirect to /login.

Logs in with the newly created credentials.

Confirms redirection to /topics.

Logs out.

✅ Regular User Registration
Uses the user role.

Verifies redirect to /login.

Logs in and checks redirection to /topics.

Logs out.

❌ Invalid Username Registration (Sad Path)
Submits an empty username.

Still expects a login redirect (this is likely a bug or needs updated assertion).

Attempts login and logout.

🧪 Faker Utility - faker-util.js
Generates random test data with the following schema:

js
Copy
Edit
{
  username: 'uniqueuser123',
  email: 'user@example.com',
  password: 'testotestosterone',
  confirmPassword: 'testotestosterone',
  role: 'quiz_master' | 'user',
  roleId: 'role-quiz-master' | 'role-user',
  expectedRedirect: '/manage-topics' | '/topics'
}
📌 Notes
⚠️ There’s a syntax bug in the test file: cy.get(#${registrationData.roleId}) should be cy.get(\#${registrationData.roleId}`)`.

Username field left blank is expected to fail, but test assumes success — you may need to fix the test expectation based on actual form validation logic.


