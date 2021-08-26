describe('Vue 3 Playground', () => {
  it('should display playground text on page', () => {
    cy.visit('/')
    cy.contains('h3', 'test dashboard')
  })
})
