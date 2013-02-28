Trakio.Router.map(function() {
  this.resource('stories', function() {
    this.route('index');
    this.route('new');
  });
  this.route('login');
});
