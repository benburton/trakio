(function() {

  var flashDuration = 2000;

  Trakio.showForm = function(selector, css) {
    css = css || {};
    var $form = $(selector);
    var $textFields = $('input[type=text], input[type=email]', $form);
    $textFields.val('');
    $form.css({
      top: css.top ? css.top : (window.innerHeight/2 - parseInt($form.css('height'))/2) + 'px',
      left: (window.innerWidth/2 - parseInt($form.css('width'))/2) + 'px'
    });
    $form.show();
    $form.animate({opacity: 1, top: '-=15'}, 'fast', function() {
      $textFields.first().focus();
    });
  }

  Trakio.hideForm = function(selector, callback) {
    var $form = $(selector);
    callback = callback || function(){};
    $form.animate({opacity: 0, top: '+=15'}, 'fast', function() {
      $form.hide();
    });
  };

  Trakio.flash = function(messageKey) {
    if (!$('#flash:visible').length) {
      $('#flash').html(Em.I18n.t(messageKey));
      Trakio.showForm('#flash', {top: '30px'});
      setTimeout(function() {
        Trakio.hideForm('#flash');
      }, flashDuration);
    }
  };

  Trakio.confirm = function(message, options) {
    options = options || {};
    options.yes = options.yes || function(){};
    options.no = options.no || function(){};

    Ember.View.create({
      templateName: 'confirmation',
      message: message,

      click: function(e) {
        var $target = $(e.target);
        if ($target.hasClass('yes')) {
          options.yes();
          Trakio.hideForm('#confirmation-dialog', function() {
            this.remove();
          });
        } else if ($target.hasClass('no')) {
          options.no();
          Trakio.hideForm('#confirmation-dialog', function() {
            this.remove();
          });
        }
        return false;
      },

      didInsertElement: function() {
        Trakio.showForm('#confirmation-dialog');
      }
    }).append();
  }
})();
