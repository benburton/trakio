Trakio.LogoutRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    Trakio.authentication_token = undefined;
    $.cookie('authentication_token', undefined);
    controller.logout();
    console.log(Trakio.authentication_token);
  }
});
