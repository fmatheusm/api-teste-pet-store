/// <reference types='cypress' />
import { requestComSucesso } from '../../fixtures/pet/putPet.json'
import { faker } from '@faker-js/faker';

const url = 'petStore';
Cypress.env('baseUrl', url);
const endPointPutPet = Cypress.env('pet');

const id = '';
const auth = '';

describe('Testes endpoint store order', () => {
    it('Buscar pet com sucesso', () => {
        requestComSucesso.name = faker.person.firstName();
        requestComSucesso.category.name = faker.person.firstName();
        cy.putGenericoBody(endPointPutPet.putPet, id, requestComSucesso, auth)
            .then(response => {
                expect(response.status).to.eq(200);
                expect(response.body.name).to.eq(requestComSucesso.name);
                expect(response.body.category.name).to.eq(requestComSucesso.category.name);
                cy.validaContrato('schemaPet/putPet200.json', response.body);
            });
    });
});