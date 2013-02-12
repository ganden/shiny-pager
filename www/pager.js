$(document).on("click", ".pager-previous.disabled", function(evt) {
  evt.preventDefault();
});

$(document).on("click", ".pager-previous:not(.disabled)", function(evt) {
  var el = $(evt.currentTarget).closest('ul.pager');
  el.attr('value', Math.max(parseInt(el.attr('min')), parseInt(el.attr('value')) - 1));
  if (el.attr('value') <= el.attr('min'))
    $(evt.currentTarget).addClass("disabled");
  el.children(".pager-next").removeClass("disabled");
  el.trigger("change");
  $('button[type="submit"]').click();
  evt.preventDefault();
});

$(document).on("click", ".pager-next.disabled", function(evt) {
  evt.preventDefault();
});

$(document).on("click", ".pager-next:not(.disabled)", function(evt) {
  var el = $(evt.currentTarget).closest('ul.pager');
  el.attr('value', Math.min(parseInt(el.attr('max')), parseInt(el.attr('value')) + 1));
  if (el.attr('value') >= el.attr('max'))
    $(evt.currentTarget).addClass("disabled");
  el.children(".pager-previous").removeClass("disabled");
  el.trigger("change");
  $('button[type="submit"]').click();
  evt.preventDefault();
});

var pagerBinding = new Shiny.InputBinding();
$.extend(pagerBinding, {
  find: function(scope) {
    return $(scope).find(".pager");
  },
  getValue: function(el) {
    return parseInt($(el).attr('value'));
  },
  setValue: function(el, value) {
    $(el).attr('value', value);
  },
  subscribe: function(el, callback) {
    $(el).on("change.pagerBinding", function(e) {
      callback();
    });
  },
  unsubscribe: function(el) {
    $(el).off(".pagerBinding");
  }
});

Shiny.inputBindings.register(pagerBinding);