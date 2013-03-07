Trakio.Project = DS.Model.extend({
  name: DS.attr('string'),
  stories: DS.hasMany('Trakio.Story')
});
