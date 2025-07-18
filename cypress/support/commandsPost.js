Cypress.Commands.add('postGenerico', (endpoint, bodyRequest, auth) => {
  const baseUrl = Cypress.env('baseUrl');
  const requestUrl = endpoint.startsWith('https') ? endpoint : Cypress.env(baseUrl) + endpoint;
  cy.request({
    method: 'POST',
    url: requestUrl,
    failOnStatusCode: false,
    body: bodyRequest,
    headers: {
      'Authorization': auth,
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
});

Cypress.Commands.add('postQsBody', (endpoint, queryString, bodyRequest, auth) => {
  const baseUrl = Cypress.env('baseUrl');
  const requestUrl = endpoint.startsWith('https') ? endpoint : Cypress.env(baseUrl) + endpoint;
  cy.request({
    method: 'POST',
    url: requestUrl,
    failOnStatusCode: false,
    qs: queryString,
    body: bodyRequest,
    headers: {
      'Authorization': auth,
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
});
