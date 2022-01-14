import { StacheElement } from 'can'
import view from './app.stache'

export class App extends StacheElement {
	static view = view;

	static props = {
		foo: 'bar'
	};
}

customElements.define('can-app', App);