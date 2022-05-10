/* eslint-disable */
describe('Register as user client', () => {
  it('should display the home page', () => {
    cy.visit(`http://localhost:3000`);
    cy.get('*[class^="cities__list"]').should('be.visible');
    cy.get(':nth-child(4) > .menu__list--inactive').click();
  })

  it('Input user data to register with wrong password', () => {
    cy.get('[name="firstName"]').type('Luis Andres');
    cy.get('[name="lastName"]').type('Porto Sastoque');

    cy.get('[type="email"]').type('jlopezsa18@outlook.com');

    cy.get('[name="password"]').type('123');

    cy.get('[name="confirmPass"]').type('1234');

    cy.get('p > .form__input').select('Usuario');

    cy.get('.form__submit').click();

    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-popup').should('be.visible');

    cy.get('.swal2-confirm').click()
  })

  it('Input user data to register with right password', () => {
    cy.get('[name="password"]').type('{backspace}');
    cy.get('[name="password"]').type('{backspace}');
    cy.get('[name="password"]').type('{backspace}');

    cy.get('[name="password"]').type('123');

    cy.get('[name="confirmPass"]').type('{backspace}');
    cy.get('[name="confirmPass"]').type('{backspace}');
    cy.get('[name="confirmPass"]').type('{backspace}');
    cy.get('[name="confirmPass"]').type('{backspace}');
    cy.get('[name="confirmPass"]').type('123');

    cy.get('p > .form__input').select('Usuario');

    cy.get('.form__submit').click();

    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-popup').should('be.visible');

    cy.get('.swal2-confirm').click()
  })

});
