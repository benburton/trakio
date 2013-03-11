Trakio.Story = DS.Model.extend({

  position: DS.attr('number'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  project: DS.belongsTo('Trakio.Project'),
  reporter: DS.belongsTo('Trakio.User'),
  assignee: DS.belongsTo('Trakio.User'),
  storyType: DS.attr('string'),
  state: DS.attr('string'),

  elementId: function() {
    return 'story_' + this.get('id');
  }.property('id'),

  typeAbbreviation: function() {
    var storyType = this.get('storyType');
    return storyType ? storyType.charAt(0).toUpperCase() : '';
  }.property('storyType'),

  started: function() {
    return this.get('state') == 'started';
  }.property('state'),

  didCreate: function() {
    $('#loading').remove();
    Trakio.flash('stories.create.message');
    Trakio.hideForm('#new-story');
  },

  didUpdate: function() {
    Trakio.flash('stories.update.message');
  }

});
