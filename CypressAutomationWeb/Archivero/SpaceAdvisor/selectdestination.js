describe('TC Seleccionar Destino', function() {

    it('Seleccion de Destino', function() {
   
       cy.get('.Box__box___2XzJ2 > .Box__box___2XzJ2:nth-child(1) > div > .theme__input___qUQeP > .theme__inputElement___27dyY').click()
    
       cy.get('span > .theme__month___27O28 > .theme__days___3kAIy > .theme__active___2k63V > span').click()
    
       cy.get('div > .theme__overlay___PiEHX > .theme__dialog___1f3Zg > .theme__navigation___3eiS- > .theme__button___1iKuo:nth-child(2)').click()
    
       cy.get('body').click()
    
       cy.get('span > .theme__month___27O28 > .theme__days___3kAIy > .theme__active___2k63V > span').click()
    
       cy.get('div > .theme__overlay___PiEHX > .theme__dialog___1f3Zg > .theme__navigation___3eiS- > .theme__button___1iKuo:nth-child(2)').click()
    
       cy.get('div > .Hero__hero___1FDXn > .flexboxgrid__row___1y_mg > .Box__box___2XzJ2 > .theme__active___31xyK').click()
    
       cy.get('.flexboxgrid__row___1y_mg > .Box__box___2XzJ2 > .theme__dropdown___co-4M:nth-child(3) > .theme__values___1jS4g > li:nth-child(2)').click()
    
       cy.get('.flexboxgrid__row___1y_mg > .Box__box___2XzJ2 > .theme__dropdown___co-4M:nth-child(4) > .theme__input___qUQeP > .theme__inputElement___27dyY').click()
    
       cy.get('.flexboxgrid__row___1y_mg > .Box__box___2XzJ2 > .theme__dropdown___co-4M:nth-child(4) > .theme__values___1jS4g > li:nth-child(2)').click()
    
       cy.get('#app > div > .Hero__hero___1FDXn > .flexboxgrid__row___1y_mg > .theme__button___1iKuo').click()
    
    })
   
   })
   