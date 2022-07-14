describe('Drag and Drop feature', ()=>{
    it('Drag and drop using data transfer', ()=>{
       cy.visit('http://practice.cybertekschool.com/drag_and_drop')
       drag_ndrop();
    })
})

const dataTransfer= new DataTransfer;

function drag_ndrop(){
    cy.get('#column-a').should('be.visible').trigger('dragStart')
    cy.wait(1000)
    cy.get('#column-b').should('be.visible').trigger('Drop',{dataTransfer})
    cy.wait(1000)
    cy.get('#column-b').should('be.visible').trigger('dragEnd')
}