Trakio.SettingsController = Ember.ObjectController.extend({

  updateUser: function(user) {
    this.store.commit();
    Trakio.flash('settings.updated_message');
    this.transitionToRoute('dashboard');
  }

});