Trakio.StoriesIndexRoute = Ember.Route.extend({
  model: function() {
    return Trakio.Story.find();
  },
  setupController: function(controller, model) {
    controller.set('stories', model);
  }
});

Trakio.StoriesNewRoute = Ember.Route.extend({
  model: function() {
    return Trakio.Story.createRecord();
  },
  setupController: function(controller, model) {
    this._super();
    controller.set('content', model);
  }
});
