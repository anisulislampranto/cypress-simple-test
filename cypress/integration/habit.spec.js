/// <reference types="cypress" />

describe("habit dashboard", () => {
  beforeEach(() => {
    cy.visit("/habits");
  });

  it("should display modal onclick", () => {
    cy.get("#habit-add-btn").click();
    cy.contains("Add a new habit").should("be.visible");
  });

  it("should show habit card when new habit is added", () => {
    cy.get("#habit-add-btn").click();
    cy.get(".form-control").type("this is a habit");
    cy.get(".btn-primary").click();
    cy.contains("this is a habit")
      .should("be.visible")
      .and("have.class", "HabitCard__habit-container");
  });

  it("should toggle havit card onclick", () => {
    cy.get("#habit-add-btn").click();
    cy.get(".form-control").type("this is a habit");
    cy.get(".btn-primary").click();
    cy.contains("this is a habit").click();
    cy.contains("this is a habit").should("be.visible");
  });
});
