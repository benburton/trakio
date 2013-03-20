Trakio.Comment = DS.Model.extend({
  body: DS.attr('string'),
  createdAt: DS.attr('date'),
  user: DS.belongsTo('Trakio.User'),
  story: DS.belongsTo('Trakio.Story'),

  createdAtString: function() {
    return moment(this.get('createdAt')).format('DD MMMM, YYYY h:mma');
  }.property('createdAt')
});
