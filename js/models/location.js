var app = app || {};

(function () {
	'use strict';
	app.Location = Backbone.Model.extend({
		"defaults": {
			"street": "",
			"city": ""
		}
	});
})();
