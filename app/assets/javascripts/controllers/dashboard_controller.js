Trakio.DashboardController = Ember.ArrayController.extend({
  addProject: function(name) {
    var project = Trakio.Project.createRecord({name: name});
    this.store.commit();
  }
});