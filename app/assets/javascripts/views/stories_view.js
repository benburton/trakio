(function() {

  Trakio.StoryLineItemView = Ember.View.extend({
    templateName: 'stories/story',
    change: function(event) {
      this.get('controller').commit();
    }
  });

  Trakio.StoryTitleView = Ember.View.extend({
    isExpanded: false,
    click: function(event) {
      var $story = $(event.target).closest('.story');
      if (this.get('isExpanded')) {
        this.get('controller').contract($story);
      }
      else {
        this.get('controller').expand($story);
      }

      this.set('isExpanded', !this.get('isExpanded'));
    }
  });

  Trakio.StoriesNewButtonView = Ember.View.extend({
    visible: false,

    click: function(event) {
      Trakio.showForm('#new-story');
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
      return false;
    }

  });

  Trakio.StoriesNewCancelButtonView = Ember.View.extend({
    click: function() {
      Trakio.hideForm('#new-story');
      return false;
    }
  });

})();