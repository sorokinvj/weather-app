describe('Weather app succesful', () => {
  it('clicks suggest option and gets forecast', () => {
    cy.visit('/')
    cy.findByAltText('input city').should('exist')
    cy.findByAltText('input city').click().type('london')
    cy.get('.city-option:first').click()
    cy.get('.forecast-city').should('exist')
  })
  it('clicks search button and gets forecast', () => {
    cy.visit('/')
    cy.findByAltText('input city').click().type('london')
    cy.findByText(/Search/).click()
    cy.get('.forecast-city').should('exist')
  })
  it('persist cities list in the state', () => {
    cy.visit('/')
    cy.findByAltText('input city').click().type('london')
    cy.findByText(/Search/).click()
    cy.findByAltText('input city').click().type('Manchester')
    cy.get('.city-option:first').click()
    cy.get('.forecast-city').should('have.length', 2)
  })
})

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
  })
})
