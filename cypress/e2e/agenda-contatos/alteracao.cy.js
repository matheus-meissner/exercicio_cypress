/// <reference types="cypress" />

describe('Testes para o edit', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve alterar o contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('TesteEdicao')
        cy.get('[type="email"]').clear().type('teste@edicao.com')
        cy.get('[type="tel"]').clear().type('11 12345678')
        cy.get('.alterar').click()
    })
})