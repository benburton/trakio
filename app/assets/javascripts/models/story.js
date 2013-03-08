Trakio.Story = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  project: DS.belongsTo('Trakio.Project'),
  reporter: DS.belongsTo('Trakio.User'),

  didCreate: function() {
    $('#loading').remove();
  }
});
