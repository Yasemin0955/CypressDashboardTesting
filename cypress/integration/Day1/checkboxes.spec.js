/// <reference types="cypress" />

describe('Checkboxes testing',()=>{
    it('Checkbox testing', ()=>{
        cy.visit('http://practice.cybertekschool.com/checkboxes')

        cy.viewport('iphone-xr')
        cy.wait(2000);
        cy.get('#box1').check().should('be.checked');
       // cy.get('#box1').check().should('not.be.checked');
       cy.get('[name="checkbox2"]').click().should('not.be.checked');
    })

    it('Checkbox testing', ()=>{
        cy.visit('http://practice.cybertekschool.com/checkboxes')

        cy.viewport('iphone-3')
        cy.wait(2000);
        cy.get('#box1').check().should('be.checked');
       // cy.get('#box1').check().should('not.be.checked');
       cy.get('[name="checkbox2"]').click().should('not.be.checked');
    })
})