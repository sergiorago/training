var app = app || {};

(function ($) {
	'use strict';

	app.WikiView = Backbone.View.extend({

        render: function() {
            var source = $('#wiki-template').html(),
                template = Handlebars.compile(source),
                html = template(this.model.toJSON());

            this.$el.append(html);

            return html;
        }
	});
})(jQuery);
