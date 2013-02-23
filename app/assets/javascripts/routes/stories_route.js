Trakio.StoriesRoute = Ember.Route.extend({
  model: function() {
    return Trakio.Story.find();
  }
});