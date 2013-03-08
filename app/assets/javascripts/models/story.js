Trakio.Story = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  project: DS.belongsTo('Trakio.Project'),
  reporter: DS.belongsTo('Trakio.User'),
  storyType: DS.attr('string'),
  typeAbbreviation: function() {
    return this.get('storyType').charAt(0).toUpperCase();
  }.property('storyType'),

  didCreate: function() {
    $('#loading').remove();
  },

  didUpdate: function() {
    Trakio.flash('stories.update.message');
  }
});
