/*global Backbone */
var app = app || {};

(function () {

	'use strict';

	app.Wikis = Backbone.Collection.extend({
		"model": app.Wiki,

        "url": "https://en.wikipedia.org/w/api.php",

        "parse": function(response) {
			var lst = _.map(response[1], function(val) {
				return {
					"name": val
				};
			});

			return lst;
        },

        "sync": function(method, collection, options) {
            var that = this;
            var params = _.extend({
				"url": that.url,
        	    "jsonp": "callback",
        	    "dataType": "jsonp"
            }, options);

            return $.ajax(params);
        }
	});
})();
