import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		// name: 42
		name: 'world'
	}
});

export default app;
