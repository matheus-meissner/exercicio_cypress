/// <reference types="cypress" />

describe('Testes para a página de agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve preencher as informações de contato', ()=> {
        cy.get('[type="text"]').type('Matheus')
        cy.get('[type="email"]').type('matheus@meissner.com')
        cy.get('[type="tel"]').type('11 12345678')
        cy.get('.adicionar').click()
    })
})