
<reference types= "cypress" />

//visit 
cy.visit('open the url');
cy.visit('url', {timeout : 10000}); //it is gonna wait for 10000 to reach the webpage

//should is a promise in here
let path='https://www.google.com'
cy.url().should('include',path);

//finding element
cy.get(loc).click;
cy.get(loc).should('be.visible');
cy.get(loc).should('be.exist');

//negative ones
cy.get(loc).should('not.be.visible');
cy.get(loc).should('not.be.exist');

cy.get('h1').should('have.length',3);
cy.get('h1').should('have.text','balala');
cy.get('h1').should('have.value','cypress');

//how to move from parent to child
cy.get(loc).first();
cy.get(loc).last();
cy.get(loc).eq(1).click();

cy.go('back');//same as driver.navigate().back();
cy.get('tbody tr').nextAll.click(multiple,true); //it will click many element at the same time


cy.get(loc).prev.click();
cy.get(loc).prevAll.click(multiple,true);

//hover handling
cy.get('loc').trigger('mouseover').click();
cy.get('loc').trigger('mouseup').click();

//first clear the inputbox then sendkeys
cy.get('#username').clear().type('Yasemin');

//get the element by text 
cy.contains('blue').click;



