/* eslint-disable */
describe('Login as admin user', () => {
  it('should display the home page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('*[class^="cities__list"]').should('be.visible');
    cy.get('[data-cy="click_login_link"]').click();
    cy.wait(2000)
  })

  it('Input login and password', () => {
    cy.get('[data-cy="login_input_name"]').type('jlopezsa@gmail.com');
    cy.wait(2000)
    cy.get('[data-cy="login_input_password"]',{ timeout: 50000 }).type('123');
    cy.wait(2000)
    cy.get('*[class^="form__submit"]').click();
  })

  it('Register a new parking', () => {
    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-popup').should('be.visible');
    cy.wait(2000)
    cy.get('.swal2-confirm').click()
    cy.wait(60000)
    cy.get('[data-cy="click_to_create_parking"]').click();
    cy.wait(2000)
    cy.get('[data-cy="input_parking_name"]').type('Parking Express');
    cy.wait(1000)
    cy.get('[data-cy="input_parking_cityName"]').type('Bucaramanga');
    cy.wait(1000)
    cy.get('[data-cy="input_parking_addres"]').type('Cl. 37 #26-16');
    cy.wait(1000)
    cy.get('[data-cy="input_parking_phone"]').type('3132546875');
    cy.wait(1000)
    cy.get('[data-cy="input_parking_value"]').type('2500');
    cy.wait(1000)
    cy.get('[data-cy="input_parking_start"]').type('05:00');
    cy.wait(1000)
    cy.get('[data-cy="input_parking_close"]').type('22:00');
    cy.wait(1000)
    cy.get('[data-cy="input_parking_places"]').type('50');
    cy.wait(1000)
    cy.get('[data-cy="input_parking_latitude"]').type('7.1202643755777615');
    cy.wait(1000)
    cy.get('[data-cy="input_parking_longitude"]').type(' -73.11679023553522');
    cy.wait(1000)
    cy.get('input[type=file]').selectFile('./src/figures/parking_bucara_01.jpg', { action: 'drag-drop' })
    cy.wait(3000)
    cy.get('[type="submit"]').click();
    cy.wait(2000)
    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-popup').should('be.visible');
    cy.wait(2000)
    cy.get('.swal2-confirm').click()
  })

  // it('Click to register a new parking', () => {
  // })

  // it('Input data to create a parking', () => {
  //   cy.get('[data-cy="input_parking_name"]').type('Parking Express');
  //   cy.get('[data-cy="input_parking_cityName"]').type('Bucaramanga');
  //   cy.get('[data-cy="input_parking_addres"]').type('Cl. 37 #26-16');
  //   cy.get('[data-cy="input_parking_phone"]').type('3132546875');
  //   cy.get('[data-cy="input_parking_value"]').type('2500');
  //   cy.get('[data-cy="input_parking_start"]').type('05:00');
  //   cy.get('[data-cy="input_parking_close"]').type('22:00');
  //   cy.get('[data-cy="input_parking_places"]').type('50');
  //   cy.get('[data-cy="input_parking_latitude"]').type('7.1202643755777615');
  //   cy.get('[data-cy="input_parking_longitude"]').type(' -73.11679023553522');
  //   cy.get('input[type=file]').selectFile('./src/figures/parking_buucara_01.jpg', { action: 'drag-drop' })
  //   cy.get('[type="submit"]').click();
  //   cy.get('.swal2-container').should('be.visible');
  //   cy.get('.swal2-popup').should('be.visible');
  //   cy.get('.swal2-confirm').click()
  // })

  // it('Click OK in popup reistered', () => {
  // })
});
