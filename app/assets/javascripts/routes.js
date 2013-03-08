Trakio.Router.map(function() {
  this.route('dashboard');
  this.resource('projects', function() {
    this.resource('project', { path: ':project_id' });
  });
  this.route('login');
  this.route('logout');
  this.route('settings');
  this.route('registration', { path: '/register'});
});

Trakio.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('dashboard');
  }
});