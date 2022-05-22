// https://docs.cypress.io/api/introduction/api.html

describe('Visits the app root url', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'Lorem ipsum dolor sit amet')
  })
})

describe('drag the tag', () => {
  it('After drag, should show correct tag list', () => {
    cy.visit('/')
    cy.get('.search-list > :nth-child(1)')
      .trigger('pointerdown', { which: 1 })
      .trigger('pointermove', 100, 240, { force: true })
      .trigger('pointerup', 100, 240, { force: true })
    cy.get('.search-list > :nth-child(2)').should('contain', 'Lorem ipsum dolor sit amet')
  })
})

describe('search title', () => {
  it('Should show correct tag list', () => {
    cy.visit('/')
    cy.get('.el-input__inner').focus().type('Nunc nec nulla eget nisi accumsan convallis.')
    cy.get('.search-bar .el-button').click()
    cy.get('.search-tag').should('have.length', 1)
    cy.get('.search-tag').should('contain', 'Nunc nec nulla eget nisi accumsan convallis.')
  })
})
