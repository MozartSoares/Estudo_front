/// <reference types='cypress' />
describe("Testes para a manipulação de contatos da lista", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("Deve adicionar um novo contato de teste a lista", () => {
        cy.get('[type="text"]').type('nome-teste')
        cy.get('[type="email"]').type('teste@email-teste.com')
        cy.get('[type="tel"]').type('81999300709{enter}')
        cy.get('ul').should('contain', 'nome-teste')
    })

    it("Deve editar o nome do contato de teste", () => {
        cy.get('.contato').contains('nome-teste').parent().parent().parent().find('.edit').click()
        cy.get('[type="text"]').clear().type('nome-editado')
        cy.get('.alterar').click()
        cy.get('.contato').should('contain', 'nome-editado')
        cy.get('body').should('not.contain', 'nome-teste')
    })

    it("Deve remover o contato de teste que foi editado da lista", () => {
        cy.get('.contato').contains('nome-editado').parent().parent().parent().find('.delete').click()
        cy.get('body').should('not.contain', 'nome-editado')
    })
})