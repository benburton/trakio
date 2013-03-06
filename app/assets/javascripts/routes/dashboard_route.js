Trakio.DashboardRoute = Ember.Route.extend({
  model: function() {
    return Trakio.Project.find();
  },
  setupController: function(controller, model) {
    controller.set('projects', model);
  }
});
