describe('Pruebas de API', () => {
    it('Crear un nuevo usuario en signup', () => {
        cy.request({
          method: 'POST',
          url: 'https://api.demoblaze.com/signup',
          body: {
            username: "jmsuarez", 
            password: "MTIzNDU="
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('token');
        });
      });
});