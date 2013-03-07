(function() {

  function isValidEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function getErrorMessage(options) {
    if (!options.password) { return 'Please enter a password'; }
    if (!options.password_confirmation) { return 'Please confirm your password.'; }
    if (options.password != options.password_confirmation) { return 'Passwords did not match.'; }
    if (options.password.length < 8) { return 'Password was not long enough.'; }
    if (!isValidEmail(options.email)) { return 'Please enter a valid email address.'; }
  }

  Trakio.RegistrationController = Ember.Controller.extend({

    register: function(options) {
      this.set('errorMessage', getErrorMessage(options));
      if (!getErrorMessage(options)) {
        var self = this;
        $.ajax({
          type: 'post',
          url: '/register',
          data: { user: options },
          success: function(data) {
            $.cookie('authentication_token', data.user.authentication_token);
            Trakio.set('authentication_token', data.user.authentication_token);
            self.get('target').transitionTo('dashboard');
          },
          error: function(data) {
            var response = JSON.parse(data.responseText);
            var errorMessages = response.registration;
            if (errorMessages.length > 0) {
              self.set('errorMessage', errorMessages[0]);
            }
          }
        });
      }
    }

  });

})();
