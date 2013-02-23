Trakio.StoriesIndexRoute = Ember.Route.extend({
  model: function() {
    return Trakio.Story.find();
  },
  setupController: function(controller, model) {
    controller.set('stories', model);
  }
});