Trakio.LogoutRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.logout();
  }
});
