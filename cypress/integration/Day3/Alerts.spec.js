/// <reference types="cypress" />
describe('JavaScript Alerts Testing', ()=>{

    beforeEach('Login the page',()=>{
        cy.visit('http://practice.cybertekschool.com/javascript_alerts')
    })
    it('Handling JS Alert -Validate Alert text and click OK', ()=>{
       

        cy.get('[onclick="jsAlert()"]').click();

        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am a JS Alert')
        })

        cy.on('window:confirm', ()=>true)

        cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    it('Handling JS Confirm and click OK', ()=>{
        //go to the webpage
       
         //get the element by attribute and value dont forget square brakets and click
        cy.get('[onclick="jsConfirm()"]').click();
        //use on method to handle the js alert and verify with expect method 
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am a JS Confirm')
        })
        //true dersek ok click yapiyo false dersek cancel click yapiyo
        cy.on('window:confirm', ()=>true)
        //first get the result element and verify with should method
        cy.get('#result').should('have.text','You clicked: Ok')

    })

    it('Handling JS Confirm and click Cancel', ()=>{
        //go to the webpage
       
         //get the element by attribute and value dont forget square brakets and click
        cy.get('[onclick="jsConfirm()"]').click();
        //use on method to handle the js alert and verify with expect method 
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am a JS Confirm')
        })
        //true dersek ok click yapiyo false dersek cancel click yapiyo
        cy.on('window:confirm', ()=>false)
        //first get the result element and verify with should method
        cy.get('#result').should('have.text','You clicked: Cancel')

    })

    it('Handling JS Prompt -input text in prompt, click ok and Validate the input text', ()=>{
        //go to the webpage
        
       
       
        cy.window().then(($window)=>{
        cy.stub($window,'prompt').returns('This is a test text')
        cy.get('[onclick="jsPrompt()"]').click();
        })
        cy.get('#result').should('have.text','You entered: This is a test text')

    })
})