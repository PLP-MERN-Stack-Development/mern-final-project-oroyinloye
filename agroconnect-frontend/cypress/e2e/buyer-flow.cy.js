// cypress/e2e/buyer-flow.cy.js
describe('Buyer Flow', () => {
  it('Registers, logs in, places an order, and chats with farmer', () => {
    cy.visit('/register');
    cy.get('input[name="name"]').type('Buyer Jane');
    cy.get('input[name="email"]').type('buyer@example.com');
    cy.get('input[name="password"]').type('securepass');
    cy.get('select[name="role"]').select('Buyer');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');

    cy.visit('/login');
    cy.get('input[name="email"]').type('buyer@example.com');
    cy.get('input[name="password"]').type('securepass');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/marketplace');

    cy.contains('Fresh Tomatoes').click();
    cy.get('button').contains('Order').click();
    cy.contains('Order placed');

    cy.visit('/chat');
    cy.get('input[name="message"]').type('Hi, is the order confirmed?');
    cy.get('button').contains('Send').click();
    cy.contains('Hi, is the order confirmed?');
  });
});