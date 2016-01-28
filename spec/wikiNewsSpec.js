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
    var wikiApi = new WikiApi();

    beforeEach(function(done) {
        var city = "Bogota";
        wikiApi.loadWikis(city, function() {
            done();
        });
    });

    it("Should be able to load wiki information", function(done) {
        expect(wikiApi.wikisLoaded).toBe(true);
        done();
    });
});

describe("NYT Api", function() {
    var nytApi = new NYTApi();
    beforeEach(function(done) {
        var city = "Bogota";
        nytApi.loadArticles(city, function() {
            done();
        });
    });

    it("Should be able to load articles information", function(done) {        
        expect(nytApi.articlesLoaded).toBe(true);
        done();
    });
});
