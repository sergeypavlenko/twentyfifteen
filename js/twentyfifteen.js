(function ($) {
  "use strict";

  Drupal.behaviors.twentyfifteenContent = {
    attach: function () {
      var articles = $('#block-twentyfifteen-content article.hentry');

      // Add class "hentry" for block system content if on page not havent
      // articles.
      if (articles.length == 0) {
        $('#block-twentyfifteen-content').addClass('hentry');
      }

      // Class for user avatar.
      $('.user-picture a img').addClass('avatar avatar-default');

      // Class for all article except first.
      $('.view .view-content .views-row article.hentry:not(:first)').addClass('not-first');

      // Hide comments block if then empty.
      if ($('.comments-area section div').length == 0) {
        $('.comments-area').hide();
      }
    }
  };
})(jQuery);