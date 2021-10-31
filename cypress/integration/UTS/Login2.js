context('Login Saucode Test', () => {
    it('Login Saucode Test', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[id="user-name"]').type('standard_user')
        cy.get('input[type="password"]').type('secret_sauce')
        cy.get('[id="login-button"]').click()
    });

    it('Login Saucode Test', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[id="user-name"]').type('performance_glitch_user')
        cy.get('input[type="password"]').type('secret_sauce')
        cy.get('[id="login-button"]').click()
    })
});