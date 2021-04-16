Given('I clean database', () => {
    cy.request('POST', '/reset')
})