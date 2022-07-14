/// <reference types="cypress" />


import {URL} from '../../support/authentication'
import {CNA} from '../../support/CNA'
describe('Radio Button Tests', ()=>{
    beforeEach('Opening the URL',()=>{
        cy.visit(URL);
    })
    it('Verify all the radio buttons are checked', ()=>{
     
       CNA.function1();
    })

    it('Verify all the radio buttons are checked', ()=>{
     
        CNA.function1();
     })

    
})
