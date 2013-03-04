//= require jquery
//= require jquery.cookie
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require routes
//= require store
//= require_tree ./routes
//= require_tree ./helpers
//= require_tree ./controllers
//= require_tree ./models
//= require_tree ./templates
//= require_tree ./views


Trakio = Ember.Application.create({
  authentication_token: $.cookie('authentication_token')
});
