Trakio.DashboardRoute = Ember.Route.extend({
  model: function() {
    return Trakio.Project.find();
  },
  setupController: function(controller, model) {
    this._super();
    controller.set('projects', model);
  }
});
