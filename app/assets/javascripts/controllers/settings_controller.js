Trakio.SettingsController = Ember.ObjectController.extend({

  updateUser: function() {
    var self = this;
    var user = Trakio.User.find('me');
    user.setProperties({
      name: self.get('name'),
      email: self.get('email')
    });
    user.validate().then(function() {
      if (user.get('isValid')) {
        self.store.commit();
        self.transitionToRoute('dashboard');
      }
      else if (user.get('errors.email')) {
        Trakio.flash('settings.errors.blank_email');
      }
    });
  }

});