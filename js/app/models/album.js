define(function (require) {

    "use strict";

    var Backbone            = require('backbone'),
        id=1,
        xml,
        parsed_albums = [], 
        num_photos,
        id,
        title,
        
        
        Album = Backbone.Model.extend({  

 
        }),

        
        AlbumCollection = Backbone.Collection.extend({

            model: Album,
            
            url: function(){
                
                    var link = "http://api.flickr.com/services/rest/?";
                    link += "&method=flickr.photosets.getList";
                    link += "&api_key=0ca57413706b5500f54f134b27f0c5c9";
                    link += "&user_id=95277676@N06";
                    
                    return link;
            },
            
            /*
            url: function(){
                    return "/school-proxy.php?type=albums";
                 },*/
            
        
            parse: function (data) {
                xml = data;
                
                $(xml).find('photoset').each(function (index) {
                    
                    title = $(this).find('title').text();
                    id = $(this).attr('id');                    
                    num_photos = $(this).attr('photos');
         
                    parsed_albums.push({id:id, title: title, num_photos:num_photos});
                   
                });

                return parsed_albums;
            },
                    

            fetch: function (options) {
                options = options || {};
                options.dataType = "xml";
                return Backbone.Collection.prototype.fetch.call(this, options);
            }

        });


    return {
        Album: Album,
        AlbumCollection: AlbumCollection
    };

});