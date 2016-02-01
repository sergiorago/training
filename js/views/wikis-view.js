var app = app || {};

(function ($) {
	'use strict';

	app.WikisView = Backbone.View.extend({

        render: function() {
            var source = $('#wikis-template').html(),
                template = Handlebars.compile(source),
                html = template(this.collection.toJSON());

            this.$el.html(html);

            var $wikiList = this.$el.find('#wikipedia-links');

            this.collection.each(function ( model ) {
                var wikiView = new app.WikiView({
                    model: model,
                    el: $wikiList
                });

                $wikiList.append(wikiView.render());
            });
        }
	});
})(jQuery);
