describe('My First Test', () => {
  it('Visits the app running locally', () => {
    cy.visit('http://localhost:3000')
    cy.findByAltText('input city').should('exist')
    cy.findByAltText('input city').click().type('london')
  })
})
