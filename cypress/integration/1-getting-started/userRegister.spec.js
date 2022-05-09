/* eslint-disable */
describe('Register as user client', () => {
  it('should display the home page', () => {
    cy.visit(`https://parkingappreal.netlify.app/`);
    cy.get('*[class^="cities__list"]').should('be.visible');
    cy.get(':nth-child(4) > .menu__list--inactive').click();
    cy.wait(2000)
  })

  it('Input user data to register with wrong password', () => {
    cy.get('[name="firstName"]').type('Luis Andres');
    cy.wait(500)
    cy.get('[name="lastName"]').type('Porto Sastoque');
    cy.wait(500)
    cy.get('[type="email"]').type('jlopezsa18@outlook.com');
    cy.wait(500)
    cy.get('[name="password"]').type('123');
    cy.wait(500)
    cy.get('[name="confirmPass"]').type('1234');
    cy.wait(500)
    cy.get('p > .form__input').select('Usuario');
    cy.wait(500)
    cy.get('.form__submit').click();
    cy.wait(500)
    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-popup').should('be.visible');
    cy.wait(2000)
    cy.get('.swal2-confirm').click()
  })

  it('Input user data to register with right password', () => {
    cy.get('[name="password"]').type('{backspace}');
    cy.get('[name="password"]').type('{backspace}');
    cy.get('[name="password"]').type('{backspace}');
    cy.wait(500)
    cy.get('[name="password"]').type('123');
    cy.wait(1000)
    cy.get('[name="confirmPass"]').type('{backspace}');
    cy.get('[name="confirmPass"]').type('{backspace}');
    cy.get('[name="confirmPass"]').type('{backspace}');
    cy.get('[name="confirmPass"]').type('{backspace}');
    cy.get('[name="confirmPass"]').type('123');
    cy.wait(1000)
    cy.get('p > .form__input').select('Usuario');
    cy.wait(1000)
    cy.get('.form__submit').click();
    cy.wait(1000)
    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-popup').should('be.visible');
    cy.wait(2000)
    cy.get('.swal2-confirm').click()
  })

});
