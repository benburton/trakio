Trakio.CommentsView = Ember.View.extend({
  templateName: 'stories/comments',
  submit: function(event) {
    var story = Trakio.Story.find(parseInt($("input[name='story_id']", event.target).val()));

    this.get('controller').addComment({
      story: story,
      user: Trakio.User.find('me'),
      body: this.get('commentField').get('value')
    });
    event.stopPropagation();
    return false;
  }
});

Trakio.AddCommentButton = Ember.View.extend({
  click: function(e) {
    var $form = $(e.target).closest('form');
    e.stopPropagation();
    $form.submit();
    $('textarea', $form).val('');
    return false;
  }
});