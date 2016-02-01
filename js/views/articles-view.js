var app = app || {};

(function ($) {
	'use strict';

	app.ArticlesView = Backbone.View.extend({

        render: function() {
            var source = $('#articles-template').html(),
                template = Handlebars.compile(source),
                html = template(this.collection.toJSON());

            this.$el.html(html);

            var $articlesList = this.$el.find('#nytimes-articles');

            this.collection.each(function ( model ) {
                var articleView = new app.ArticleView({
                    model: model,
                    el: $articlesList
                });

                $articlesList.append(articleView.render());
            });
        }
	});
})(jQuery);
