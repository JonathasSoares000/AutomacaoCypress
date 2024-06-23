import userDate from '../fixtures/users/user-date.json'

describe('Orange HRM Tests', () => {

const selectList = {

username: "[name='username']",
password: "[name='password']",
btnCadastrar: "[type='submit']",
}

  it('Login com sucesso', () => {
    cy.visit('/auth/login')
    cy.get(selectList.username).type(userDate.userSucesse.username);
    cy.get(selectList.password).type(userDate.userSucesse.password);
    cy.get(selectList.btnCadastrar).click();
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard');
  })
 
  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectList.username).type(userDate.userFail.username);
    cy.get(selectList.password).type(userDate.userFail.password);
    cy.get(selectList.btnCadastrar).click();
    cy.get("[role='alert']").contains('Invalid credentials');
 
  })
})
