describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("https://www.google.com");
    cy.get('input[name="q"]').type("Testing {enter}");
  });
});
