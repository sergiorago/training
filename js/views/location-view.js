var app = app || {};

(function ($) {
	'use strict';

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.LocationView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: $('#main'),

		initialize: function () {
        	this.model.on('change', this.render, this);
        },

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
			// This is method that can be called
			// once an object is init. You could
			// also do this in the initialize event
			var source = $('#page-template').html();
			var template = Handlebars.compile(source);
			var html = template(this.model.toJSON());

			this.$el.html(html);

			if(this.model.get("city")){
				app.wikis = new app.Wikis();

				app.wikis.fetch({
					data: {
					   	"search": this.model.get("city"),
						"format": "json",
	        	        "action":"opensearch"
					},
					async: false, // by default it is true
   					success: function() {

						var wikisView = new app.WikisView({
							collection: app.wikis,
							el: $('#wikis')
						});

						Handlebars.registerPartial('wiki', $('#wiki-template').html());

						wikisView.render();
					}
				});

				app.articles = new app.Articles();

				app.articles.fetch({
					data: {
					   	"q": this.model.get("city"),
						"sort": "newest"
					},
					async: false, // by default it is true
   					success: function() {

						var articlesView = new app.ArticlesView({
							collection: app.articles,
							el: $('#articles')
						});

				        Handlebars.registerPartial('article', $('#article-template').html());

						articlesView.render();
					}
				});
			};
		},

		events: {
			"click .btnSubmit": "formSubmit"
		},

		formSubmit: function() {
			var street = this.$el.find("#street").val(),
	        	city = this.$el.find("#city").val();

			this.model.set({"street": street});
			this.model.set({"city": city});
		}

	});
})(jQuery);
