Trakio.ApplicationController = Ember.Controller.extend({

  isLoggedIn: function() {
    return Trakio.get('authentication_token') != null;
  }.property('Trakio.authentication_token'),

  isNotLoggedIn: function() {
    return !this.get('isLoggedIn');
  }.property('Trakio.authentication_token'),

  toggleLoggedIn: function() {
    this.set('isLoggedIn', Trakio.authentication_token != null);
  }.observes('Trakio.authentication_token'),

  loadCurrentUser: function() {
    if (!Trakio.get('currentUser')) {
    // TODO Fix this to side-load into the store instead of querying for id, and then re-querying for model
    Ember.$.getJSON('users/me?auth=' + Trakio.authentication_token, function(data) {
      Trakio.set('currentUser', Trakio.User.find(data.user.id));
    });
    }
  }

});
