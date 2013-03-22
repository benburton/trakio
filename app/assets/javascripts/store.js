$(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
  if (jqXHR.status === 401) {
    document.location.href = '/#/login';
  }
});


Trakio.Adapter = DS.RESTAdapter.extend({
  bulkCommit: false,
  buildURL: function(record, suffix) {
    var baseUrl = this._super(record, suffix);
    var token = Trakio.get('authentication_token');
    return token ? baseUrl + '?auth=' + token : baseUrl;
  }
});

DS.RESTAdapter.configure('Trakio.Comment', {
  sideloadAs: 'comments'
});

Trakio.Adapter.configure("plurals", { story: 'stories' });

Trakio.Store = DS.Store.extend({
  revision: 11,
  adapter: Trakio.Adapter.create()
});

