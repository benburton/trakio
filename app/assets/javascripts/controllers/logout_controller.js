Trakio.LogoutController = Ember.Controller.extend({
  logout: function() {
    $.cookie('authentication_token', undefined);
    Trakio.authentication_token = undefined;
    this.transitionToRoute('index');
  }
});