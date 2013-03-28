Trakio.Adapter = DS.FixtureAdapter.extend({});

Trakio.Adapter.configure("plurals", { story: 'stories' });

Trakio.Store = DS.Store.extend({
  revision: 12,
  adapter: Trakio.Adapter.create()
});

Trakio.Project.FIXTURES = [{
  'id': 1,
  'name': 'test',
  'stories': [1]
}];


Trakio.Story.FIXTURES = [{
  'id': 1,
  'title': 'Great'
}];

Trakio.User.FIXTURES = [{
  'id': 'me',
  'name': 'Ben Burton',
  'email': 'ben@burton.com'
}];
