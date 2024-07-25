/// <reference types="cypress" />

describe('Testes para o delete', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve deletar um contato', ()=> {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})