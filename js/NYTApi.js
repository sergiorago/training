'use strict';

function NYTApi(){

    this.articlesLoaded = false;

    this.loadArticles = function(city, callback) {
        var self = this;

        if(city){
            var apiKey = "0457a67e1cf6851de0806a0c2cdb144d:8:74097763",
                apiURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + city + "+&sort=newest&api-key=" + apiKey;

            $.getJSON( apiURL, function( data ) {
                self.articlesLoaded = true;
                callback(data.response.docs);
            }).error(function(e) {
                callback();
            });
        }
        else {
            callback();
        }
    };
};
