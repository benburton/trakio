Trakio.LogoutRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    Trakio.set('authentication_token', undefined);
    $.cookie('authentication_token', undefined);
    controller.logout();
  }
});
