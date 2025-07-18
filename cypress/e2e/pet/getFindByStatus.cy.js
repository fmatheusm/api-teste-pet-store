/// <reference types='cypress' />
import { findByStatus } from '../../fixtures/pet/getFindByStatus.json'

const url = 'petStore';
Cypress.env('baseUrl', url);
const endPet = Cypress.env('pet');

const auth = '';

describe('Testes endpoint store order', () => {
    findByStatus.forEach(status => {
        it(`Deve buscar o pet pelo status: ${status.status}`, () => {
            cy.getQs(endPet.getFindByStatus, status, auth).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array')
                    .and.to.have.length.greaterThan(0);
                cy.validaContrato('schemaPet/getFindByStatus200.json', response.body);
            });
        });
    });
});