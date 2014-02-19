define(function (require) {

    "use strict";

    var _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/TweetList.html'),
        UsefulFuncs         = require('app/utils/useful_func'),
        side_nav            = require('text!tpl/SideNav.html'),
        side_template = _.template(side_nav),
        template = _.template(tpl);
  

    return Backbone.View.extend({

        initialize: function (options) {
            this.render(options);
            this.collection.on("reset", this.render, this);
        },

        render: function (options) {
            
            this.$el.html(template({tweets: this.collection.toJSON(), 
                                    UsefulFuncs:UsefulFuncs, 
                                    side_nav:side_template({message_count:this.options.message_count})}));
            return this;
        },
                


    });

});