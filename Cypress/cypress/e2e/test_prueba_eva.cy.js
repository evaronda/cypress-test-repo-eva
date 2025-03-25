describe('Pruebas básicas en Cypress', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io');
    });

    it('Verifica el título de la página', () => {
        cy.title().should('include', 'Cypress');
    });

    it('Navega a otra sección', () => {
        cy.contains('type').click();
        cy.url().should('include', '/commands/actions');
    });

    it('Realiza una búsqueda en un input', () => {
        cy.get('.action-email').type('test@example.com').should('have.value', 'test@example.com');
    });
});
