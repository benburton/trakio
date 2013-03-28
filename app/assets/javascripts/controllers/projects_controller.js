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
    var self = this;
    var comment = Trakio.Comment.createRecord(commentParams);
    comment.validate().then(function() {
      if (comment.get('isValid')) {
        self.store.commit();
      }
      else {
        comment.deleteRecord();
        if (comment.get('errors.body')) {
          Trakio.flash('stories.comments.errors.blank_comment');
        }
      }
    });
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