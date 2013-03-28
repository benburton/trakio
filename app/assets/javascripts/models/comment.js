Trakio.Comment = DS.Model.extend(Ember.Validations.Mixin, {
  body: DS.attr('string'),
  createdAt: DS.attr('date'),
  user: DS.belongsTo('Trakio.User'),
  story: DS.belongsTo('Trakio.Story'),

  validations: {
    body: {
      presence: true
    }
  },

  createdAtString: function() {
    return this.get('createdAt') ? moment(this.get('createdAt')).format('DD MMMM, YYYY h:mma') : '';
  }.property('createdAt')
});
