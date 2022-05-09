/* eslint-disable */
describe('Register a Parking', () => {
  it('Click to register a new parking', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="click_to_create_parking"]').click();
    // cy.get('*[class^="cities__list"]').should('be.visible');
    // cy.get('[data-cy="login_input_name"]').type('jlopezsa@gmail.com');
    // cy.get('[data-cy="login_input_password"]').type('123');
  })

  // it('Input login and password', () => {
  //   cy.get('[data-cy="login_input_name"]').type('jlopezsa@gmail.com');
  //   cy.get('[data-cy="login_input_password"]').type('123');
  //   cy.get('*[class^="form__submit"]').click();
  // })

  // it('should display 10 recipes', () => {
  //   cy.visit('/');
  //   cy.get('[data-cy="recipe"]').should('have.length', 10);
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
