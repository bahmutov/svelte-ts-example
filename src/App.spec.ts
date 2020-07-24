import App from './App.svelte'
import { mount } from 'cypress-svelte-unit-test'
it('shows greeting', () => {
  mount(App, {
    // @ts-ignore
    props: {
      name: 'World',
    },
  })
  cy.contains('h1', 'Hello World!').should('be.visible')
})
