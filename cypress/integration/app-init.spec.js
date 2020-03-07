describe('App initialization', () => {
  it('Loads todos on page load', () => {
    cy.seedAndVisit()
  cy.get('.todo-list li')
	.should('have.length', 4)
  })

  it.only('Display an error on falue', () => {
    cy.server()
    cy.route({
    url: '/api/todos',
    method: 'GET',
    status: 500,
    response: {}
    })
    cy.visit('/')

    cy.get('.todos-list li')
      .should('not.exist')

    cy.get('.error')
      .should('be.visible')
  })
})
