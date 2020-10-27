// Open https://the-internet.herokuapp.com/login

// Please automate next test cases:
// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in
// 2. Login with invalid creds and check validation error
// 3. Logout from app and assert you successfully logged out

it ('login', () => {
  cy.visit('https://the-internet.herokuapp.com/login')
  cy.get('[id="username"]').type('tomsmith')
  cy.get('[id="password"]').type('SuperSecretPassword!')
  cy.get('[class="fa fa-2x fa-sign-in"]').click()
  cy.get('[class="flash success"]').contains('You logged into a secure area!').should('exist')
   })

it ('login', () => {
  cy.visit('https://the-internet.herokuapp.com/login')
  cy.get('[id="username"]').type('tomsmith')
  cy.get('[id="password"]').type('NotSuperSecretPassword!')
  cy.get('[class="fa fa-2x fa-sign-in"]').click()
  cy.get('[class="flash error"]').contains('Your password is invalid!').should('exist')
   })
 
  it ('login', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('[id="username"]').type('tomsmith')
    cy.get('[id="password"]').type('SuperSecretPassword!')
    cy.get('[class="fa fa-2x fa-sign-in"]').click()
    cy.get('[class="flash success"]').contains('You logged into a secure area!').should('exist')
    
    cy.get('[class ="icon-2x icon-signout"]').click()

    cy.get('[id="flash"]').contains('You logged out of the secure area!').should('exist')
  }) 