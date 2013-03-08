Trakio.Project = DS.Model.extend({
  name: DS.attr('string'),
  stories: DS.hasMany('Trakio.Story'),
  project_memberships: DS.hasMany('Trakio.ProjectMembership'),
  users: DS.hasMany('Trakio.User'),

  // TODO - Wondering if there's a better way to do this
  emails: function() {
    return $.map(this.get('project_memberships').toArray(), function(membership) {
      var email = membership.get('email') || membership.get('user').get('email');
      return Ember.Object.create({
        email: email,
        imageUrl: 'http://www.gravatar.com/avatar/' + $.md5(email) + '.jpg'
      });
    });
  }.property('users.@each', 'project_memberships.@each')

});
