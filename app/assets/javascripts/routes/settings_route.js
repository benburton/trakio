Trakio.SettingsRoute = Ember.Route.extend({
  model: function() {
    return Trakio.currentUser;
  },
  setupController: function(controller, model) {
    controller.set('user', model);
  }
});
