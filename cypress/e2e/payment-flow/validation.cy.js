/// <reference types="cypress" />

import {
  formFields,
  invalidFormValues,
  validFormValues,
} from '../../mocks/values';

describe('form validation', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('fill form fields with valid values', () => {
    // Go to payment page
    cy.visit(`${window.location.host}/payment`);

    // Fill payment form fields with values
    validFormValues.map(({ name, value }) => {
      cy.get(`input[name="${name}"]`).type(value);
    });

    // Check payment form fields assigned values
    validFormValues.map(({ name, value }) => {
      cy.get(`input[name="${name}"]`).should('have.value', value);
    });

    // Ensure form fields has no errors
    formFields.map((field) => {
      cy.get(`input[name="${field}"]`).should('not.have.class', 'text-error');
    });
  });

  it('fill form fields with invalid values', () => {
    // Go to payment page
    cy.visit(`${window.location.host}/payment`);

    // Fill payment form fields with values
    invalidFormValues.map(({ name, value }) => {
      cy.get(`input[name="${name}"]`).type(value);
    });

    // Check payment form fields assigned values
    invalidFormValues.map(({ name, value }) => {
      cy.get(`input[name="${name}"]`).should('have.value', value);
    });

    // Submit payment form
    cy.get('#paymentInformation')
      .get('form button')
      .contains('Continue')
      .click();

    // Ensure form fields has marker with errors
    formFields.map((field) => {
      cy.get(`input[name="${field}"]`).should('have.class', 'text-error');
    });

    // Ensure payment form is still active
    cy.get('#paymentInformation > div').should('have.class', 'max-h-auto');

    // Inpsect review panel is still hidden
    cy.get('#review > div').should('have.class', 'max-h-0');
  });
});
