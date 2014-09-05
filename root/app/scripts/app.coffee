class App extends Controller
	constructor: ->
		super
		console.log 'Hello World'

		data =
			name: "bernat"

		this.el.append( this.getTemplate('Template', data) )

$(document).ready( ->
	app = new App( el: $('#App') )
)
	
