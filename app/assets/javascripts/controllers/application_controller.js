Trakio.ApplicationController = Ember.Controller.extend({
  isStories: function() {
    this.get('currentRoute') == 'stories';
  }.property('currentRoute')
});
