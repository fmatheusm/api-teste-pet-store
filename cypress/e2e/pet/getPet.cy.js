/// <reference types='cypress' />
import { buscarPetSucesso } from '../../fixtures/pet/getPet.json'

const url = 'petStore';
Cypress.env('baseUrl', url);
const endPointGetPet = Cypress.env('pet');

const id = 0;
const auth = '';

describe('Testes endpoint store order', () => {
  it('Buscar pet com sucesso', () => {
    cy.getGenerico(endPointGetPet.getPet, buscarPetSucesso.petId, auth).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(buscarPetSucesso.name);
      cy.validaContrato('schemaPet/getPet200.json', response.body);
    });
  });

  it('Buscar pet inexistente', () => {
    cy.getGenerico(endPointGetPet.getPet, id, auth).then(response => {
      expect(response.status).to.eq(404);
      expect(response.statusText).to.eq('Not Found');
      cy.validaContrato('schemaPet/getPet404.json', response.body);
    });
  });
});
