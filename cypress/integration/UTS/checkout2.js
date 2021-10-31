describe('Cekout Keselahan 2', () => {
    it('Cekout Sauce Demo', () => {
      cy.visit('https://www.saucedemo.com')
      cy.get('[id="user-name"]').type('standard_user')
      cy.get('input[type="password"]').type('secret_sauce')
      cy.get('[id="login-button"]').click()
      cy.get('[id="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[id="shopping_cart_container"]').click()
      cy.get('[id="checkout"]').click()
      cy.get('[id="first-name"]').type('Rudy')
      cy.get('[id="postal-code"]').type('654123')
      cy.get('[id="continue"]').click()

    })
  })