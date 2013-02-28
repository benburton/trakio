Trakio.LoginController = Ember.Controller.extend({

  login: function(email, password) {
    var self = this;
    $.ajax({
      type: 'post',
      url: '/auth',
      data: {
        login: {
          email: email,
          password: password
        }
      },
      success: function(data) {
        Trakio.authentication_token = data.user.authentication_token;
        self.get('target').transitionTo('stories');
      }
    });
    return false;
  }

});