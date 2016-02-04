var app = app || {};

app.Article = Backbone.Model.extend({
    "defaults": {
        "headline": "",
        "url": "#",
        "snippet": ""
    }
});
