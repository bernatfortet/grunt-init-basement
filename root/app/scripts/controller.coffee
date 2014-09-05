class @Controller extends Spine.Controller
	counter: 0
	constructor: ->
		super

	getTemplate: ( templateName, data ) ->
		source = $("##{templateName}").html();
		template = Handlebars.compile( source )
		if( data != '' )
			$(template(data))
		else
			$(template())