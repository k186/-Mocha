/**
 * Created by k186 on 2020/9/29.
 */
describe('My First Test', () => {
    it('finds the content "type', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()

        cy.url().should('include','/commands/actions')

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value','fake@email.com')
    })
})