(function () {

    'use strict';

    var $body = $('body'),
        wireEvents,
        registerPartials,
        renderPage,
        renderWikis,
        renderArticles,
        formSubmit,
        nytApi = new NYTApi(),
        wikiApi = new WikiApi();

    wireEvents = function () {
        $(document).on("submit", "#form-container", formSubmit);
    };

    registerPartials = function () {
        Handlebars.registerPartial('wiki', $('#wiki-template').html());
        Handlebars.registerPartial('article', $('#article-template').html());
    };

    renderPage = function (street, city) {
        var template = $('#page-template').html(),
            compiled = Handlebars.compile(template),
            rendered = compiled({street:street, city:city});

        $('#main').html(rendered);

        wikiApi.loadWikis(city, renderWikis);
        nytApi.loadArticles(city, renderArticles);
    };

    renderWikis = function(data) {
        var template = $('#wikis-template').html(),
            compiled = Handlebars.compile(template),
            rendered = compiled(data);
        $('#wikis').html(rendered);
    };

    renderArticles = function(data) {
        var template = $('#articles-template').html(),
            compiled = Handlebars.compile(template),
            rendered = compiled(data);
        $('#articles').html(rendered);
    };

    //EVENTS
    formSubmit = function() {
        var street = $body.find("#street").val();
        var city = $body.find("#city").val();

        renderPage(street, city);

        return false;
    };

    $(function() {
        wireEvents();
        registerPartials();
        renderPage();
    });

})();
