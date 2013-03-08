Trakio.User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),

  displayName: function() {
    var name = this.get('name');
    return name ? name : this.get('email');
  }.property('name', 'email')

});