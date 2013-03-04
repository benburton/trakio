Trakio.StoriesIndexController = Ember.ArrayController.extend({

  add: function(storyParams) {
    var story = Trakio.Story.createRecord(storyParams);
    this.store.commit();
  },

  expand: function(el) {
    $('.details').removeClass('expanded');
    var $details = $('.details', el);
    $details.addClass('expanded');
  },

  contract: function(el) {
    var $details = $('.details', el);
    $details.removeClass('expanded');
  }

});