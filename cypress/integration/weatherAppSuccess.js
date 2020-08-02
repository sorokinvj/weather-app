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
