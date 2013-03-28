Trakio.SettingsRoute = Ember.Route.extend({
  model: function() {
    return Trakio.User.find('me');
  }
});
