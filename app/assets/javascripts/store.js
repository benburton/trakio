DS.RESTAdapter.configure("plurals", { story: 'stories' });

Trakio.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create({ bulkCommit: false })
});
