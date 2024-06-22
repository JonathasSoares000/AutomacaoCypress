


describe('Orange HRM Tests', () => {

const selectList = {

username: "[name='username']",
passeword: "[name='password']",
btnCadastrar: "[type='submit']",


}


  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectList.username).type('Admin');
    cy.get(selectList.passeword).type('admin123');
    cy.get(selectList.btnCadastrar).click();
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard');
  })
 
  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectList.username).type('test');
    cy.get(selectList.passeword).type('test');
    cy.get(selectList.btnCadastrar).click();
    cy.get("[role='alert']").contains('Invalid credentials');
 
  })
})
