(function() {

  function showForm() {
    var $newProject = $('#new_project');
    var $nameField = $('input[type=text]', $newProject);
    $nameField.val('');
    $newProject.css({
      top: (window.innerHeight/2 - parseInt($newProject.css('height'))/2) + 'px',
      left: (window.innerWidth/2 - parseInt($newProject.css('width'))/2) + 'px'
    });
    $newProject.show();
    $newProject.animate({opacity: 1, top: '-=15'}, 'fast', function() {
      $nameField.focus();
    });
    return false;
  }

  function hideForm() {
    var $newProject = $('#new_project');
    $newProject.animate({opacity: 0, top: '+=15'}, 'fast', function() {
      $newProject.hide();
    });
  }

  Trakio.CreateProjectButtonView = Ember.View.extend({
    click: showForm
  });

  Trakio.ProjectNewView = Ember.View.extend({
    templateName: 'projects/new',

    submit: function() {
      var loading = document.createElement('div');
      loading.id = 'loading';
      $(event.target).append(loading);
      this.get('controller').addProject(this.get('nameField').get('value'));
      hideForm();
      return false;
    }
  });

  Trakio.ProjectNewCancelButtonView = Ember.View.extend({
    click: hideForm
  });

})();
