Trakio.ProjectMembership = DS.Model.extend({
  project: DS.belongsTo('Trakio.Project'),
  user: DS.belongsTo('Trakio.User'),
  email: DS.attr('string'),

  didCreate: function() {
    var $emailField = $('#user_management input[type=email]');
    $('#loading').remove();
    $emailField.val('');
    $emailField.focus();
  }
});
