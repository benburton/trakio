Trakio.User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),

  displayName: function() {
    var name = this.get('name');
    return name ? name : this.get('email');
  }.property('name', 'email'),

  imageSrc: function() {
    return 'http://www.gravatar.com/avatar/' + $.md5(this.get('email')) + '.jpg';
  }.property('email')

});