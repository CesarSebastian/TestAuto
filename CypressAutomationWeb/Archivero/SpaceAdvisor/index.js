const { cyan } = require("color-name")
const { path } = require('cypress-xpath')

describe('Probando la pagina Space Advisor', () => {
    it('Visita a Space Advisor', () => {

        //Iniciarmos visitando la pagina web 
        cy.visit('http://demo.testim.io/')
        //Buscamos al boton y damos click
        cy
            .contains('Log in')
            .click()
        //Validamos que exista texto
        cy
            .contains('Welcome back! Let’s explore our awesome universe together :)')
        //Buscamos los input text e ingresamos información
        cy
            .xpath('/html/body/div/div/section[3]/div/div[2]/div/form/div[1]/input')
            .type('fake@mail.com')
            .xpath('/html/body/div/div/section[3]/div/div[2]/div/form/div[2]/input')
            .type('12345678')
        //Cancelamos la petición y volvemos a ingresar al log            
        cy
            .get('.Login__flex-grow___2DSXS > .flexboxgrid__col-xs-6___1DhV6 > .Box__box___2XzJ2 > .Login__button-box___1OzjH > .theme__button___1iKuo:nth-child(1)')
            .click()
        cy
            .contains('Log in')
            .click()
        cy
            .xpath('/html/body/div/div/section[3]/div/div[2]/div/form/div[1]/input')
            .clear()
            .type('fake@mail.com')
            .xpath('/html/body/div/div/section[3]/div/div[2]/div/form/div[2]/input')
            .clear()
            .type('12345678')
        //aqui si iniciamos
        cy
            .get('.Login__flex-grow___2DSXS > .flexboxgrid__col-xs-6___1DhV6 > .Box__box___2XzJ2 > .Login__button-box___1OzjH > .theme__button___1iKuo:nth-child(2)')
            .click()
            .end()
        //fin de caso de prueba
    })
  })