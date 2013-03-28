Trakio.User = DS.Model.extend(Ember.Validations.Mixin, {
  name: DS.attr('string'),
  email: DS.attr('string'),

  validations: {
    email: {
      presence: true
    }
  },

  displayName: function() {
    var name = this.get('name');
    return name ? name : this.get('email');
  }.property('name', 'email'),

  imageSrc: function() {
    return 'http://www.gravatar.com/avatar/' + $.md5(this.get('email')) + '.jpg';
  }.property('email'),

  didUpdate: function() {
    Trakio.flash('settings.updated_message');
  }

});