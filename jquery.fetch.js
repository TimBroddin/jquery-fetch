(function($){
  $.fn.fetch = function(callback) {  
    return this.each(function() {
      var $this = $(this);
			$this.load($this.data('href'), function() {
				if(callback) {
					$.proxy(callback, this)();
					$(this).data('callback', callback);
				} else if(callback !== false && $(this).data('callback')) {
					$.proxy($(this).data('callback'), this)();
				}		
			});
    });
  };
})(jQuery);
