(function() {

  var selector = '#new_project';

  function getStoryId(element) {
    var match = element.id.match(/\bstory_(\d+)\b/);
    if (match) { return match[1] };
  }

  Trakio.CreateProjectButtonView = Ember.View.extend({
    click: function() {
      Trakio.showForm(selector);
      return false;
    }
  });

  Trakio.ProjectNewView = Ember.View.extend({
    templateName: 'projects/new',

    submit: function() {
      var loading = document.createElement('div');
      loading.id = 'loading';
      $(event.target).append(loading);
      this.get('controller').addProject(this.get('nameField').get('value'));
      Trakio.hideForm(selector);
      return false;
    }
  });

  Trakio.ProjectNewCancelButtonView = Ember.View.extend({
    click: function() {
      Trakio.hideForm(selector);
      return false;
    }
  });

  Trakio.ProjectView = Ember.View.extend({
    didInsertElement: function() {
      var store = this.get('controller').get('store');
      $('.sortable').sortable({
        axis: 'y',
        handle: '.drag',
        update: function() {
          $('li.story').each(function(index, element) {
            Trakio.Story.find(getStoryId(element)).set('position', index);
          });
          store.commit();
        }
      });
    }
  });

})();
