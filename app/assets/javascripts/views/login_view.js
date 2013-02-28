Trakio.LoginView = Ember.View.extend({

  submit: function() {
    this.get('controller').login(
      this.get('emailField').get('value'),
      this.get('passwordField').get('value')
    );
    return false;
  }

});