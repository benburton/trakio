Trakio.ApplicationController = Ember.Controller.extend({

  isLoggedIn: Trakio.get('authentication_token') != null,
  isNotLoggedIn: !(Trakio.get('authentication_token') != null),

  toggleLoggedIn: function() {
    this.set('isLoggedIn', Trakio.authentication_token != null);
    this.set('isNotLoggedIn', !this.get('isLoggedIn'));
  }.observes('Trakio.authentication_token')

});
