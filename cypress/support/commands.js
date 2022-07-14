// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

import { username,password,wrongpassword,wrongusername,url } from './authentication.constant'


Cypress.Commands.add('login',()=>{
    cy.visit(url)
    cy.get('#email').clear().type(username)
    cy.get('[type="password"]').clear().type(password)

    cy.contains('Log In').click()
})

Cypress.Commands.add('wrong_username_Testing',()=>{
    cy.wait(1000)
    cy.visit(url)
    cy.get('#email').clear().type(wrongusername)
    cy.get('[type="password"]').clear().type(password)

    cy.contains('Log In').click()

    cy.get('.uiHeaderTitle').should('be.visible')
})

Cypress.Commands.add('wrong_password_Testing',()=>{
    cy.visit(url)
    cy.get('#email').clear().type(username)
    cy.get('[type="password"]').clear().type(wrongpassword)

    cy.contains('Log In').click()

    cy.get('.uiHeaderTitle').should('be.visible')
})

Cypress.Commands.add('wrong_username_password_Testing',()=>{
    cy.visit(url)
    cy.get('#email').clear().type(wrongusername)
    cy.get('[type="password"]').clear().type(wrongpassword)

    cy.contains('Log In').click()

    cy.get('.uiHeaderTitle').should('be.visible')
})