/// <reference types='cypress' />
import { requestComSucesso } from '../../fixtures/store/postStoreOrder.json';

const url = 'petStore';
Cypress.env('baseUrl', url);
const endPointStoreOder = Cypress.env('store');

const auth = '';

describe('Testes endpoint store order', () => {
  it('Cadastrar novo pedido com sucesso', () => {
    cy.postGenerico(endPointStoreOder.postStoreOrder, requestComSucesso, auth).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.id).not.be.null;
      cy.validaContrato('schemaStore/postStoreOrder200.json', response.body);
    });
  });
});
