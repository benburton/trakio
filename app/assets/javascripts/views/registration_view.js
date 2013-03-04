Trakio.RegistrationView = Ember.View.extend({

  submit: function() {
    var parameters = {
      email: this.get('emailField').get('value'),
      password: this.get('passwordField').get('value'),
      password_confirmation: this.get('passwordConfirmationField').get('value')
    };

    this.get('controller').register(parameters);
    return false;
  }

});