/// <reference types="cypress" />

import { formFields, validFormValues } from '../../mocks/values';

describe('payment flow', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('initial page is ready', () => {
    // Customer greating caption is present
    cy.get('h1').first().should('contain.text', 'Hi,');

    // Payment amount is indicated
    cy.contains('Total due').next().invoke('text').should('match', /\$\d+/);

    // Link to next flow step
    cy.get('a.button').should('have.attr', 'href').and('include', '/payment');
  });

  it('go to payment page', () => {
    // Link to payment step is present at initial page
    cy.get('a.button')
      .should('have.attr', 'href')
      .and('include', '/payment')
      .then((href) => {
        cy.visit(`${window.location.host}${href}`);
      });
  });

  it('payment form contains all needed fields', () => {
    // Go to payment page
    cy.visit(`${window.location.host}/payment`);

    // Insure payment form is active
    cy.get('#paymentInformation > div').should('have.class', 'max-h-auto');

    // All form fields are present
    formFields.map((field) => {
      cy.get(`input[name="${field}"]`).should('be.visible');
    });

    // Form submit button is present in the form
    cy.get('#paymentInformation')
      .get('form button')
      .contains('Continue')
      .should('be.visible');
  });

  it('fill form fields and submit form', () => {
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

    // Inpsect review panel contains payment info
    cy.get('#review p')
      .first()
      .should('contain.text', 'You’re about to make a payment of');

    // Link to next flow step is present
    cy.get('a.button')
      .should('have.attr', 'href')
      .and('include', '/payment/success');

    // Submit payment review
    cy.get('a.button[href="/payment/success"]').click();

    // Ensure payment success page is loaded
    cy.location('href').should('contain', '/payment/success');

    // Inspect payment success page title
    cy.get('h1').first().should('contain.text', 'Thank you for your payment!');
  });
});
