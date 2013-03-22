//= require jquery
//= require jquery.cookie
//= require jquery.ui.sortable
//= require handlebars
//= require ember
//= require ember-data
//= require moment
//= require CLDR
//= require ember-i18n
//= require i18n
//= require jquery.md5
//= require_self
//= require routes
//= require store
//= require util
//= require enums
//= require_tree ./routes
//= require_tree ./controllers
//= require_tree ./models
//= require_tree ./templates
//= require_tree ./views

CLDR.defaultLocale = 'en';

Trakio = Ember.Application.create({
  authentication_token: $.cookie('authentication_token')
});
