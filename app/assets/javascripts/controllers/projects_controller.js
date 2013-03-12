var ben;

Trakio.ProjectController = Ember.ObjectController.extend({

  addStory: function(storyParams) {
    var story = Trakio.Story.createRecord(storyParams);
    this.store.commit();
  },

  deleteStory: function(story) {
    var self = this;
    Trakio.confirm(Em.I18n.t('stories.delete.confirmation'), {
      yes: function() {
        story.deleteRecord();
        self.store.commit();
      }
    });
  },

  addComment: function(commentParams) {
    var comment = Trakio.Comment.createRecord(commentParams);
    this.store.commit();
  },

  addUser: function(email) {
    var self = this;
    var membership = Trakio.ProjectMembership.createRecord({
      project: self.get('model'),
      email: email
    });
    this.get('model').get('project_memberships').pushObject(membership);
    this.store.commit();
  },

  commit: function() {
    this.store.commit();
  },

  expand: function(el) {
    $('.details').removeClass('expanded');
    var $details = $('.details', el);
    $details.addClass('expanded');
  },

  contract: function(el) {
    var $details = $('.details', el);
    $details.removeClass('expanded');
  }

});