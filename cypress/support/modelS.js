import { modelSURL } from "./authentication.constant";
var data= require('../fixtures/modelSPage.json')

export class ModelS{
 
    urlVerification(){
        
        cy.contains('Model S').click({force: true});
        cy.wait(3000)
        cy.url().should('eq',modelSURL )
    }

    privacy_Verification(){
        cy.scrollTo('bottomLeft')
        cy.get('[class="tds-link tcl-link"]').each(($el,index)=>{
            const text=$el.text();
            expect(text).to.contain(data.ModelS[index])
        })
    }
}

export const onModelSPage= new ModelS;