describe("WikiNews Helper", function() {
    it("shound be able to get item's wiki url", function() {
        var item = "test";

        expect(Handlebars.helpers.getWikiUrl(item)).toBeDefined();
    });

    it("should be able to get location's image url", function() {
        var street = "av boyaca";
        var city = "Bogota";

        expect(Handlebars.helpers.getAddressImageUrl(street,city)).toBeDefined();
    });
});

describe("Wiki Api", function() {
    app.wikis = new app.Wikis();
    var loadedWikis = false;

    beforeEach(function(done) {

        app.wikis.fetch({
            data: {
                "search": "Bogota",
                "format": "json",
                "action":"opensearch"
            },
            async: false,
            success: function() {
                loadedWikis = true;
                done();
            }
        });
    });

    it("Should be able to load wiki information", function(done) {
        expect(loadedWikis).toBe(true);
        done();
    });
});

describe("NYT Api", function() {
    app.articles = new app.Articles();
    var articlesLoaded = false;

    beforeEach(function(done) {

        app.articles.fetch({
            data: {
                "q": "Bogota",
                "sort": "newest"
            },
            async: false,
            success: function() {
                articlesLoaded = true;
                done();
            }
        });
    });

    it("Should be able to load articles information", function(done) {
        expect(articlesLoaded).toBe(true);
        done();
    });
});
