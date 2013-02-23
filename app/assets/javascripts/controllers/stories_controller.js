Trakio.StoriesNewController = Ember.ObjectController.extend({

  save: function() {
    var self = this;
    this.content.one('didCreate', function() {
      return self.transitionToRoute('stories.index');
    });
    this.store.commit();
  }

});