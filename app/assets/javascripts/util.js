Trakio.showForm = function(selector) {
  var $form = $(selector);
  var $textFields = $('input[type=text], input[type=email]', $form);
  $textFields.val('');
  $form.css({
    top: (window.innerHeight/2 - parseInt($form.css('height'))/2) + 'px',
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