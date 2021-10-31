context('Testing UTS', () => {
    it('Login Saucode Test', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[id="user-name"]').type('problem_user')
        cy.get('input[type="password"]').type('secret_sauce')
        cy.get('[id="login-button"]').click()
    });

    it('Login Saucode Test', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[id="user-name"]').type('locked_out_user')
        cy.get('input[type="password"]').type('secret_sauce')
        cy.get('[id="login-button"]').click()
    });
});