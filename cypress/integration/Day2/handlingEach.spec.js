
var data= require('../../fixtures/staging.json')

describe('Handling each function',()=>{

    before(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        //get the username
        cy.get('[name="txtUsername"]').clear().type('Admin')
        //get the password
        cy.get('#txtPassword').clear().type('admin123')
        //click the login button
        cy.wait(1000);
        cy.get('[class="button"]').click();
    })
    it('Testing each text',()=>{
        cy.get('.quickLinkText').each(($el,index)=>{
            cy.log('element : ',$el.text())
            const text=$el.text();
            expect(text).to.contain(data.quickLaunch[index]);

            
        })
    })
})