const { cyan } = require("color-name")
const { path } = require('cypress-xpath')

describe('Probando la pagina Juguetronic', () => {

    it('TC Inicia Pagina', () => {
        cy.visit('https://www.juguetronica.com/')
        
        //Validaremos que si estemos dentro de la pagina, buscando el elemento
        cy
        .get('.row > .align-items-center > .text-center > a > img')
        .should("exist")
    })

    it('TC LogIn',()=>{
        //Buscaremos el apartado de usuario para dale click
        cy
        .get('.col > .d-flex > .pl-3 > a > .fa-user')
        .click()
        .wait(2000)

        //Buscaremos la casilla para colocar el usuario, y colocaremos un usuario 
        //Previamente colocado como constante
        cy
        .get('#cphMain_cLoginEmailTextBox')
        .type(Cypress.env('customerEmail'))

        //Lo mismo haremos con password, que igual se encuentra como constante
        cy
        .get('#cphMain_cLoginPasswordTextBox')
        .type(Cypress.env('customerPassword'))

        //Daremos clic en el boton de Iniciar Session
        cy
        .get('#cphMain_cLoginButton')
        .click()
        .wait(2000)

        //Dado que no se encuentra nuestro usuario registrado, validaremos el mensaje colocado
        cy
        .xpath('/html/body/form/div[6]/div/div/div/div/div/div/table/tbody/tr/td[2]/div')
        .should('have.text','\n\tNo existe ninguna cuenta que coincida con esta dirección de correo electrónico\n')
        .wait(2000)

        //Regreso a página principal
        cy
        .get('.col > .d-flex > .align-items-center > a > img')
        .click()
    })

    it('TC Busqueda', () => {

        cy.visit('https://www.juguetronica.com/').wait(2000)
        //Realiza busqueda por id, escribiremos Star Wars y daremos Enter
        cy
        .get('#search')
        .type('Star Wars')
        .type('{enter}')

        //Busqueda de categoria por texto de la pagina y lo seleccionamos
        cy
        .contains('Categoría')
        .click()
        //Dentro de Categoria, buscamos "Drones" y lo seleccionamos 
        cy
        .contains('Drones')
        .click()
        //Se valida que si exista articulo por medio de una imagen 
        cy
        .get('body > div.mt-4.ee-bg-white > div > div:nth-child(2) > div.col-lg > div > div > div > a > img')
        .should('exist')
        
        //Regreso a página principal
        cy
        .get('.col > .d-flex > .align-items-center > a > img')
        .click()
    })

    it('TC Carrito de Compras',()=>{
        //Codigo sacado de Extension
        cy
        .get('.col > .d-flex > .pl-3 > a > .fa-shopping-cart')
        .click()

        //Validacion de Elemento
        cy
        .get('body > div.ee-bg-white > div > div > div > h1')
        .should('exist')

        //Seleccionamos la pestaña de Juguetes
        cy
        .contains('JUGUETES')
        .click()
        //Buscamos el juguete por medio de nombre
        cy
        .get('img[alt="LITTLEBITS - SPACE ROVER INVENTOR KIT"]')
        .click()
        //Lo gregamos al carrito de compras
        cy
        .get('#addtoshoppingcart1413861')
        .click()
        //Nos manda al carrito y validamos que el texto "Tu Compra" exista
        cy
        .get('body > div.ee-bg-white > div > div > div > h1')
        .should('have.text','TU COMPRA')
        //Damos click en comprar
        cy
        .get('.container > .row > .col > .mt-5 > .btn-default')
        .click()
    })

    it('TC Llenar CheckOut',()=>{
        //Llenar checkout mediante ID y llenado con constantes 
        cy.get('#customerName').type(Cypress.env('customerName'))

        cy.get('#customerPhone').type(Cypress.env('customerPhone'))
        
        cy.get('#customerEmail').type(Cypress.env('customerEmail'))
        
        cy.get('#customerPassword').type(Cypress.env('customerPassword'))
        
        cy.get('#passwordConfirmation').type(Cypress.env('passwordConfirmation'))

        cy.get('#fiscalIdentificationCode').type(Cypress.env('fiscalIdentificationCode'))

        //Datos de Entrega
        cy.get('#shippingName').type(Cypress.env('shippingName'))

        cy.get('#shippingAddress').type(Cypress.env('shippingAddress'))

        cy.get('#shippingCity').type(Cypress.env('shippingCity'))

        cy.get('#shippingPostalCode').type(Cypress.env('shippingPostalCode'))

        //Terminos y Condiciones
        //Buscamos el checkbox y le damos click
        cy.get('#acceptLegalTerms').click()
        //Damos Click en el boton para finalizar proceso
        cy.get('.container > .row > .col > form > .btn').click()
    })

    it('TC Eliminar Articulo',()=>{
        cy.visit('https://www.juguetronica.com/')
        //Ingresamos a la pestaña de Juguetes
        cy
        .contains('JUGUETES')
        .click()
        //Buscamos por medio del nombre de imagen un articulo
        cy
        .get('img[alt="LITTLEBITS - SPACE ROVER INVENTOR KIT"]')
        .click()
        //Agregamos en el carrito de compras el articulo que sera Space Rover
        cy
        .get('#addtoshoppingcart1413861')
        .click()
        //Va a carrito de compras
        cy
        .get('.col > .d-flex > .pl-3 > a > .fa-shopping-cart')
        .click()
        //Valida que haya articulo en carrito
        cy
        .xpath('/html/body/div[4]/div/div/div/div[1]/form/div/a/img')
        .should('exist')
        //Da clic en eliminar articulo
        cy
        .xpath('/html/body/div[4]/div/div/div/div[1]/form/div/button')
        .click()
        //Validación que ya no exista imagen
        cy
        .xpath('/html/body/div[4]/div/div/div/div[1]/form/div/a/img')
        .should('not.exist')

    })

    it('TC Eliminar sin Articulo', ()=>{
        //Este TC fue creado para forzar un error en la validacion de un elemento
        cy.visit('https://www.juguetronica.com/')
        //Ingresamos al carrito de compras
        cy
        .get('.col > .d-flex > .pl-3 > a > .fa-shopping-cart')
        .click()
        //Buscamos el elemento que no debe existir dentro el carrito de compras vacio
        //Y validamos que exista
        cy
        .xpath('/html/body/div[4]/div/div/div/div[1]/form/div/a/img')
        .should('exist')
    })

})