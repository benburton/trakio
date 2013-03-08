Trakio.ApplicationRoute = Ember.Route.extend({

  setupController: function(controller, model) {
    controller.loadCurrentUser();
    this._super(controller, model);
  }

});
