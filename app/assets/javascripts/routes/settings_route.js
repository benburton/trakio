Trakio.SettingsRoute = Ember.Route.extend({
  model: function() {
    return Trakio.User.find('me');
  },
  setupController: function(controller, model) {
    controller.set('user', model);
  }
});
