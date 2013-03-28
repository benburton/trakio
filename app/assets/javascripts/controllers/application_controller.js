Trakio.ApplicationController = Ember.Controller.extend({

  isLoggedIn: function() {
    return Trakio.get('authentication_token') != null;
  }.property('Trakio.authentication_token'),

  isNotLoggedIn: function() {
    return !this.get('isLoggedIn');
  }.property('Trakio.authentication_token'),

  toggleLoggedIn: function() {
    this.set('isLoggedIn', Trakio.authentication_token != null);
  }.observes('Trakio.authentication_token')

});
