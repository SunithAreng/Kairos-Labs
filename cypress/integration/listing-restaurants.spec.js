describe('Listing Restaurants', () => {
  it('shows restaurants from the server', () => {
    const sushiPlace = 'Pasta Place';
    const pizzaPlace = 'Salad Place';

    cy.intercept('GET', 'https://api.outsidein.dev/*/restaurants', [
      {id: 1, name: sushiPlace},
      {id: 2, name: pizzaPlace},
    ]);

    cy.visit('/');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
