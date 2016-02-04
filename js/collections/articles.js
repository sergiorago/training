/*global Backbone */
var app = app || {};

(function () {

	'use strict';

	app.Articles = Backbone.Collection.extend({
		"model": app.Article,

        "apiKey": "0457a67e1cf6851de0806a0c2cdb144d:8:74097763",

        "url": "http://api.nytimes.com/svc/search/v2/articlesearch.json",

        "parse": function(response) {
			var lst = _.map(response.response.docs, function(val) {
				return {
					"headline": val.headline.main,
                    "snippet": val.snippet,
                    "url": val.web_url
				};
			});

			return lst;
        },

        "sync": function(method, collection, options) {
            var that = this;

            if(!options["data"]["api-key"]){
                options["data"]["api-key"] = that.apiKey;
            };

            var params = _.extend({
				"url": that.url,
                "dataType": "json"
            },options);

            return $.ajax(params);
        }
	});
})();
