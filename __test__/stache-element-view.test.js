import { domEvents } from 'can'
import { App } from './components/app'

describe('Transform stache element view', () => {
	it('should transform stache element view', () => {
		const app = new App()
		app.connect()

		// Imports
		const counter = app.querySelector('my-counter')
		expect(counter.count).toEqual(0)
		const increment = counter.querySelector('#increment')

		// Events
		domEvents.dispatch(increment, 'click')
		expect(counter.count).toEqual(1)
		const count = String.prototype.trim.call(counter.querySelector('#count').innerHTML)
		expect(count).toEqual('1')
		expect(parseInt(count)).toEqual(counter.count)

		// bindings
		const bar = counter.querySelector('#bar')
		expect(bar.innerHTML).toBe('bar')
	})
})
