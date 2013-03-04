Trakio.Router.map(function() {
  this.resource('stories', function() {
    this.route('index');
    this.route('new');
  });
  this.route('index');
  this.route('login');
  this.route('logout');
  this.route('registration', { path: '/register'});
});