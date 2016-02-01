var app = app || {};

$(function () {
	'use strict';

	app.location = new app.Location();
	var locationView = new app.LocationView({
		model: app.location,
		el: $('#main')
	});

	locationView.render();

});
