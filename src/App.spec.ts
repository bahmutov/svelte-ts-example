import App from './App.svelte'
import { mount } from 'cypress-svelte-unit-test'
it('shows greeting', () => {
  mount(App, {
    // don't have type to pass props yet
    // https://github.com/bahmutov/cypress-svelte-unit-test/issues/206
    // @ts-ignore
    props: {
      name: 'World',
    },
  })
  cy.contains('h1', 'Hello World!').should('be.visible')
})
