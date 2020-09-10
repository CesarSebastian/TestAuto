const { path } = require('cypress-xpath')

describe('TC testblaze', function() {

    it('TC log in', function() {
   
    
        cy.visit('https://www.demoblaze.com/index.html#')
    
        cy
        .get('a[id="login2"]')
        .click()
        .wait(5000)

        cy
        .get('#loginusername')
        .type('fake@mail.com')
    
        cy
        .get('#loginpassword')
        .type('123456')

        cy
        .get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary')
        .click()
        
        cy
        .get('#logInModal > div > div > div.modal-footer > button.btn.btn-secondary')
        .click()
        .end()
    })

    it('TC Agregar Articulo', function(){
        
        cy
        .xpath('/html/body/div[5]/div/div[1]/div/a[3]')
        .click()
        .wait(2000)

        cy
        .xpath('/html/body/div[5]/div/div[2]/div/div[3]/div/div/h4/a')
        .click()
        .wait(2000)

        cy
        .xpath('/html/body/div[5]/div/div[2]/div[2]/div/a')
        .click()

    })

    it('TC ')

    it('TC Completar Compra', function(){

        cy
        .get('#cartur')
        .click()
        
    }) 

   })