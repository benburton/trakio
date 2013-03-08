Trakio.ApplicationController = Ember.Controller.extend({

  isLoggedIn: Trakio.get('authentication_token') != null,
  isNotLoggedIn: !(Trakio.get('authentication_token') != null),

  toggleLoggedIn: function() {
    this.set('isLoggedIn', Trakio.authentication_token != null);
    this.set('isNotLoggedIn', !this.get('isLoggedIn'));
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
