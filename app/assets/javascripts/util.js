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

  Trakio.hideForm = function(selector) {
    var $form = $(selector);
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
})();
