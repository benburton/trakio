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
        $.cookie('authentication_token', data.user.authentication_token);
        Trakio.set('authentication_token', data.user.authentication_token);
        self.get('target').transitionTo('dashboard');
      },
      error: function(data) {
        var response = JSON.parse(data.responseText);
        self.set("errorMessage", response.message);
      }
    });
    return false;
  }

});