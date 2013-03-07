Trakio.Story = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  project: DS.belongsTo('Trakio.Project'),

  didCreate: function() {
    $('#loading').remove();
    console.log('saved!');
  }
});
