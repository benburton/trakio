Trakio.Adapter = DS.FixtureAdapter.extend({
  bulkCommit: false,
  simulateRemoteResponse: false
});

Trakio.Store = DS.Store.extend({
  revision: 11,
  adapter: Trakio.Adapter.create()
});