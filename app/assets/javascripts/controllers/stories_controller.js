Trakio.StoriesNewController = Ember.ObjectController.extend({

  save: function() {
    var self = this;
    this.content.one('didCreate', function() {
      return self.transitionToRoute('stories.index');
    });
    this.store.commit();
  }

});

Trakio.StoriesIndexController = Ember.ArrayController.extend({

  expand: function(el) {
    var $details = $('.details', el);
    $details.addClass('expanded');
  },

  contract: function(el) {
    var $details = $('.details', el);
    $details.removeClass('expanded');
  }

});