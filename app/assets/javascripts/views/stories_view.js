(function() {

  function hideForm() {
    var $form = $('#new-story');
    var $fieldset = $('fieldset', $form);
    $fieldset.animate({"opacity": 0}, 300, function() {
      var padding = $form.css('padding');
      $form.css({'padding':  0});
      $form.animate({"width": "0"}, 300, function() {
        $form.hide();
        $form.css('padding', padding);
      });
    });
  }

  Trakio.StoryLineItemView = Ember.View.extend({
    templateName: 'stories/story',
    isExpanded: false,

    click: function(event) {
      if (this.isExpanded) {
        this.get('controller').contract(event.target);
      }
      else {
        this.get('controller').expand(event.target);
      }

      this.isExpanded = !this.isExpanded;
    },

    change: function(event) {
      this.get('controller').commit();
    }

  });

  Trakio.StoriesNewButtonView = Ember.View.extend({
    visible: false,

    click: function(event) {
      if (this.visible) {
        hideForm();
      } else {
        var $form = $('form', $(event.target).closest('.action'));
        var $fieldset = $('fieldset', $form);
        $form.show();
        $form.animate({"width": "500px"}, 300, function() {
          $fieldset.animate({"opacity": 1}, 300);
        });
      }
      this.visible = !this.visible;
      return false;
    }

  });


  Trakio.StoriesUsersButtonView = Ember.View.extend({
    visible: false,
    click: function(event) {
      Trakio.showForm('#user_management');
      return false;
    }
  });

  Trakio.StoriesNewView = Ember.View.extend({
    templateName: 'stories/new',

    submit: function(event) {
      var loading = document.createElement('div');
      loading.id = 'loading';
      $(event.target).append(loading);
      this.get('controller').addStory({
        title: this.get('titleField').get('value'),
        description: this.get('descriptionField').get('value'),
        project: this.get('content'),
        storyType: this.get('storyTypeField').get('value'),
        state: 'not_started'
      });
      hideForm();
      return false;
    }

  });

  Trakio.StoriesNewCancelButtonView = Ember.View.extend({
    click: hideForm
  });

})();