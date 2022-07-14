var data= require ('../../fixtures/staging.json');

if(url.include('test')){
    cy.fixture('staging.json').then((data)=>{
        data.username()
        data.url()
        data.password()

    })
}else if(url.include('uat')){
    cy.fixture('uat.json').then((data)=>{
        data.username()
        data.url()
        data.password()  
    })
}else if(url.include('prod')){
    cy.fixture('prod.json').then((data)=>{
        data.username()
        data.url()
        data.password() 
    })
}