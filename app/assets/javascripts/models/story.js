Trakio.Story = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  didCreate: function() {
    $('#loading').remove();
  }
});
