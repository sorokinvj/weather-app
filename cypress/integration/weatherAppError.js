describe('Weather app Errors', () => {
  it('not found city in db', () => {
    cy.visit('/')
    cy.findByAltText('input city').click().type('dkjksdkjshksdjhsd')
    cy.findByText(/Search/).click()
    cy.get('.error-message')
      .should('exist')
      .contains("Sorry, we don't have this city in our database. Maybe it doesn't exist?")
  })
  it('bad connection error', () => {
    cy.server({ force404: true })
    cy.visit('/')
    cy.findByAltText('input city').click().type('london')
    cy.get('.city-option:first').click()
    cy.get('.error-message').should('exist').contains('Something unexpected happened')
  })
})
