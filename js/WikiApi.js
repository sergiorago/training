'use strict';

function WikiApi() {

    this.wikisLoaded = false;

    this.loadWikis = function(city, callback) {
        var self = this;

        if(city) {
            var wApiURL = "https://en.wikipedia.org/w/api.php";
        	var wikiRequestTimeout = setTimeout(function(){
        		callback();
        	},8000);

        	$.ajax({
        	    "url": wApiURL,
        	    "jsonp": "callback",
        	    "dataType": "jsonp",
        	    "data": {
                    "format": "json",
        	        "action":"opensearch",
        	        "search": city
        	    },
        	    "success": function( response ) {
        	    	clearTimeout(wikiRequestTimeout);
                    self.wikisLoaded = true;
        	        callback(response[1]);
            	}
        	});
        }
        else {
            callback();
        }
    };
};
