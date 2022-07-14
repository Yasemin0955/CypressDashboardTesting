/// <reference types="cypress" />

import {teslaURL} from '../../support/authentication.constant';
import { onModelSPage } from '../../support/modelS';
describe('Tesla.com automation testing', ()=>{
    beforeEach('Navigate to webpage tesla.com', ()=>{
      cy.visit(teslaURL);
      cy.wait(2000)
    })

    it('Test One', ()=>{
        onModelSPage.urlVerification();
        onModelSPage.privacy_Verification();

    })
})