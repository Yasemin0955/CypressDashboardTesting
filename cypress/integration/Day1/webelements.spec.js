/// <reference types="cypress" />

describe('WebElements', ()=>{
    //by tagname
    cy.get('input');

    //by id
    cy.get('#radio1');

    //by class name
    cy.get('.icheck-player');

    //by attribute name
    cy.get('[type]');

    //by attribute name and value
    cy.get('[name="abuse"]');

    //by class value
    cy.get('[class="icheck-player"]');

    //by tagname and attribute value
    cy.get('input [class="icheck-player"]');

    //by two different attributes
    cy.get('input [class="icheck-player"][name="abuse"]')


})