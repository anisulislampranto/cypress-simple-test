/// <reference types="cypress" />

describe("Accomplishment Dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("should showcase error if information is missing", () => {
    cy.get('[data-cy="accomplishment-title-input"]').type("hello there");
    cy.get('[data-cy="accomplishment-input"]').type("hello there");
    cy.contains("Submit Accomplishment").click();
    cy.contains("Complete the items above to continue").should("be.visible");
  });

  it("should display validation component if all information is input", () => {
    cy.get('[data-cy="accomplishment-title-input"]').type("hello there");
    cy.get('[data-cy="accomplishment-input"]').type("hello there");
    cy.get('[data-cy="accomplishment-checkbox"]').click();
    cy.get(".Accomplishment-btn").click();
    cy.contains("This Accomplisment was Successfully Submitted").should(
      "be.visible"
    );
    cy.get(".Accomplishment-btn").click();
  });
});
