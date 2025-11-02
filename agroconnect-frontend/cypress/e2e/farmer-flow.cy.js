// cypress/e2e/farmer-flow.cy.js
describe('Farmer Flow', () => {
  it('Registers, logs in, and adds a product', () => {
    cy.visit('/register');
    cy.get('input[name="name"]').type('Farmer Joe');
    cy.get('input[name="email"]').type('farmer@example.com');
    cy.get('input[name="password"]').type('securepass');
    cy.get('select[name="role"]').select('Farmer');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');

    cy.visit('/login');
    cy.get('input[name="email"]').type('farmer@example.com');
    cy.get('input[name="password"]').type('securepass');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');

    cy.get('input[name="productName"]').type('Fresh Tomatoes');
    cy.get('input[name="price"]').type('500');
    cy.get('button').contains('Add Product').click();

    cy.contains('Fresh Tomatoes');
  });
});