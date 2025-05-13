import { generateRegistrationData } from '../../support/faker-util';

describe('Quiz Master and Regular User Registration', () => {
    {testIsolation: false}
    let registrationData;

    beforeEach(() => {
        registrationData = generateRegistrationData();
        cy.visit('https://testautomation-ph-quiz-app.vercel.app')
    });

    it('Quiz Master Registration', () => {
        cy.visit('/register')
        cy.get('#username').type(registrationData.username)
        cy.get('#email').type(registrationData.email)
        cy.get('#password').type(registrationData.password)
        cy.get('#confirmPassword').type(registrationData.confirmPassword)
        cy.get(`#${registrationData.roleId}`).click()
        cy.get(':nth-child(6) > .w-full').click()
        cy.url().should('include', "/login")

        //verify succesful login of the created account

        cy.login(registrationData.username, registrationData.password);
        cy.url().should('include', "/topics");
        cy.contains('button', 'Log out').click();
        
    });

    it('Regular User Registration', () => {
        registrationData = generateRegistrationData()
        registrationData.role = 'user'
        registrationData.roleId = 'role-user'
        registrationData.expectedRedirect = '/login'

        cy.visit('/register');
        cy.get('#username').type(registrationData.username)
        cy.get('#email').type(registrationData.email)
        cy.get('#password').type(registrationData.password)
        cy.get('#confirmPassword').type(registrationData.confirmPassword)
        cy.get(`#${registrationData.roleId}`).click()
        cy.get(':nth-child(6) > .w-full').click()
        cy.url().should('include', "/login")
        

        //verify succesful login of the created account
        cy.login(registrationData.username, registrationData.password);
        cy.url().should('include', "/topics");
        cy.contains('button', 'Log out').click();
        
    });

    // BONUS BONUS BONUS (Sad Path)
    it('Registration with working with special characters in username field', () => {

        cy.visit('/register')
        cy.get('#username').type('') 
        cy.get('#email').type(registrationData.email)
        cy.get('#password').type(registrationData.password)
        cy.get('#confirmPassword').type(registrationData.confirmPassword)
        cy.get(`#${registrationData.roleId}`).click()
        cy.get(':nth-child(6) > .w-full').click()
        cy.url().should('include', "/login")

        //verify succesful login of the created account
        cy.login(registrationData.username, registrationData.password);
        cy.url().should('include', "/topics");
        cy.contains('button', 'Log out').click();
    })

});
