//= require jquery
//= require jquery.cookie
//= require handlebars
//= require ember
//= require ember-data
//= require CLDR
//= require ember-i18n
//= require i18n
//= require jquery.md5
//= require_self
//= require routes
//= require store
//= require util
//= require_tree ./routes
//= require_tree ./helpers
//= require_tree ./controllers
//= require_tree ./models
//= require_tree ./templates
//= require_tree ./views

CLDR.defaultLocale = 'en';

Trakio = Ember.Application.create({
  authentication_token: $.cookie('authentication_token')
});
