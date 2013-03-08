Trakio.ManageUsersView = Ember.View.extend({

  templateName: 'projects/users',
  close: function() {
    Trakio.hideForm('#user_management');
  },
  keyDown: function(event) {
    if (event.which == 27){
      this.close();
    }
  }
});

Trakio.AddUserView = Ember.View.extend({
  submit: function() {
    this.get('controller').addUser(this.get('emailField').get('value'));
    return false;
  }
});

Trakio.CloseButton = Ember.View.extend({
  click: function() {
    this.get('parentView').close();
    return false;
  }
});