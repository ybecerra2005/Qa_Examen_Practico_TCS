describe('Validar flujo de compra', () => {
  it('Compra de más de un producto', () => {
    cy.viewport(1600, 1200);
    cy.visit('https://www.demoblaze.com');
    cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click({multiple: true});
    cy.get('.col-sm-12 > .btn').click();
    cy.on('window:alert',(str)=>{
      expect(str).to.equal('Product added');
  });
  cy.get(':nth-child(4) > .nav-link').click();
  cy.get('.col-lg-1 > .btn').click();
  cy.get('#name').type("Yesleny Becerra");
  cy.get('#country').type("Ecuador");
  cy.get('#city').type("Quito");
  cy.get('#card').type("8758963214785");
  cy.get('#month').type("08");
  cy.get('#year').type("27");
  cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!');
  })
})