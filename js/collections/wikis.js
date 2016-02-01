/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Collection
	// ---------------

	// The collection of todos is backed by *localStorage* instead of a remote
	// server.
	app.Wikis = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.Wiki,
        // Url to request when fetch() is called
        url: "https://en.wikipedia.org/w/api.php",
        parse: function(response) {
			var lst = _.map(response[1], function(val) {
				return {
					"name": val
				};
			});

			return lst;
        },
        sync: function(method, collection, options) {
            var that = this;
            var params = _.extend({
				"url": that.url,
        	    "jsonp": "callback",
        	    "dataType": "jsonp"
            },options);

            return $.ajax(params);
        }
	});
})();
