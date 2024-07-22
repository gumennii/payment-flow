/// <reference types="cypress" />

import { formFields, validFormValues } from '../../mocks/values';

describe('form edit', () => {
  it('edit form fields after validation', () => {
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

    // Submit payment form
    cy.get('#paymentInformation')
      .get('form button')
      .contains('Continue')
      .click()
      .should('contain.text', 'Sending...');

    cy.wait(2000);

    // Ensure payment form is hidden
    cy.get('#paymentInformation > div').should('have.class', 'max-h-0');

    // Inpsect review panel is active
    cy.get('#review > div').should('have.class', 'max-h-auto');

    // Ensure payment form can be edited after submission amd switch to it
    cy.get('button > div.text-button')
      .should('contain.text', 'Edit')
      .first()
      .click();

    // Ensure payment form is active
    cy.get('#paymentInformation > div').should('have.class', 'max-h-auto');

    // Inpsect review panel is hidden
    cy.get('#review > div').should('have.class', 'max-h-0');

    // Check payment form fields assigned values
    validFormValues.map(({ name, value }) => {
      cy.get(`input[name="${name}"]`).should('have.value', value);
    });
  });
});
