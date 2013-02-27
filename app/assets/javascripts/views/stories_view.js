Trakio.StoryLineItemView = Ember.View.extend({

  isExpanded: false,

  click: function(event) {
    if (this.isExpanded) {
      this.get('controller').contract(event.target);
    }
    else {
      this.get('controller').expand(event.target);
    }

    this.isExpanded = !this.isExpanded;
  }

});