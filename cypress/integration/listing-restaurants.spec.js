describe('Listing Restaurants', () => {
  it('shows restaurants from the server', () => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza Place';

    cy.server({force404: true});

    // routes to the url, then looks for saves the response as structured
    cy.route({
      method: 'GET',
      url:
        'https://outside-in-dev-api.herokuapp.com/J7ruE5tghSu7a6wk6Yba9ZaIPlRWzGFN/restaurants',
      response: [
        {id: 1, name: sushiPlace},
        {id: 2, name: pizzaPlace},
      ],
    });

    cy.visit('/');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
