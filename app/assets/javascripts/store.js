$(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
  if (jqXHR.status === 401) {
    document.location.href = '/#/login';
  }
});


Trakio.Adapter = DS.RESTAdapter.extend()

Trakio.Adapter.configure("plurals", { story: 'stories' });

Trakio.Store = DS.Store.extend({
  revision: 11,
  adapter: Trakio.Adapter.extend({
    bulkCommit: false,

    // TODO: Remove me when Ember gets sane token management
    oldAjax: function(url, type, hash) {
      hash.url = url;
      hash.type = type;
      hash.dataType = 'json';
      hash.contentType = 'application/json; charset=utf-8';
      hash.context = this;

      if (hash.data && type !== 'GET') {
        hash.data = JSON.stringify(hash.data);
      }

      jQuery.ajax(hash);
    },

    ajax: function(url, type, hash) {
      var token = Trakio.get('authentication_token');
      if (token) {
        hash.data || (hash.data = {});
        hash.data['auth'] = token;
      }
      hash.context = this;
      return this.oldAjax(url, type, hash);
    }
  })
});

DS.RESTAdapter.configure('Trakio.Comment', {
  sideloadAs: 'comments'
});