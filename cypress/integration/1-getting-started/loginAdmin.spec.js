/* eslint-disable */
describe('Login as admin user', () => {
  it('should display the home page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('*[class^="cities__list"]').should('be.visible');
    cy.get('[data-cy="click_login_link"]').click();
    // cy.get('[data-cy="login_input_name"]').type('jlopezsa@gmail.com');
    // cy.get('[data-cy="login_input_password"]').type('123');
  })

  it('Input login and password', () => {
    cy.get('[data-cy="login_input_name"]').type('jlopezsa@gmail.com');
    cy.get('[data-cy="login_input_password"]',{ timeout: 50000 }).type('123');
    cy.get('*[class^="form__submit"]').click();
  })

  it('Click OK in popup', () => {
    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-popup').should('be.visible');
    cy.get('.swal2-confirm').click()
  })

  it('Click to register a new parking', () => {
    cy.get('[data-cy="click_to_create_parking"]').click();
  })

  // it('Click to register a new parking', () => {
  //   cy.get('[data-cy="click_to_create_parking"]').click();
  // })

  // it('should display 10 lemon recipes', () => {
  //   cy.visit('/');
  //   cy.get("[data-cy='form']").type('lemon');
  //   cy.get('[data-cy="button"]').click();

  //   cy.get('[data-cy="recipe"]').should('have.length', 10);
  // })

  // it('should display 10 apple recipes', () => {
  //   cy.visit('/');
  //   cy.get("[data-cy='form']").type('apple');
  //   cy.get('[data-cy="button"]').click();

  //   cy.get('[data-cy="recipe"]').should('have.length', 10);
  // })
});
