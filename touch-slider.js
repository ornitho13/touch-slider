(function($){
	'use strict';
	
	window.TouchSlider = function () {
		this.$selector = null;
		this.len = 0;
		this.$previous = null;
		this.$next = null;
		this.isNavigationButtonPressed = false;
		this.$contentContainer = null;
		this.$containerScroller = null;
		this.scrollWidth = null;
		this.scrollPosition = 0;
	};
	
	TouchSlider.prototype.init = function (strSelector, strConteneur) {
		var self = this;
		this.$selector = $(strSelector);
		this.scrollPosition = 0;
		this.$containerScroller = this.$selector.find('.touch-slider-content-slider');
		this.$contentContainer = this.$containerScroller.find('.touch-slider-content')
		//get number of children
		var children = this.$contentContainer.children(strConteneur), i = 0;
		this.len = children.length;
		this.scrollWidth = $(children[0]).width();
		var widthContainer = 0;
		
		for (; i < this.len; i++) {
			widthContainer += $(children[i]).width()
		}
		this.$contentContainer.width(widthContainer);
		
		var delay = 50, timeoutScroll = null;
		this.$containerScroller.on('touchstart', function(){
			this.style.overflowX = 'scroll';
		});
		this.$containerScroller.on('touchend', function(event){
			var target = event.currentTarget;
			//adjust scroll
			var moduloScroll = target.scrollLeft % self.scrollWidth;
			if (moduloScroll !== 0) {
				var scrollLeftToJoin = 0;
				if (moduloScroll >= self.scrollWidth / 2) {
					scrollLeftToJoin = target.scrollLeft + (self.scrollWidth - moduloScroll);
				} else {
					scrollLeftToJoin = target.scrollLeft - moduloScroll
				}
				self.$containerScroller.animate({scrollLeft : scrollLeftToJoin}, 500, function(){
					
				});
			}
		});

		this.$selector.on('resize', function(event){
			
		});
		
		this.$selector.find('a').on('click', function(event){
			var target = event.target;
			if (target.className === 'touch-slider-next') {
				
				if (Math.abs(self.scrollPosition) >= self.$contentContainer.width() - self.$selector.width()) {
					console.log(self.scrollPosition, self.$contentContainer.width() - self.$selector.width());
					return false;
				}
				self.scrollPosition -= self.scrollWidth;
			}
			if (target.className === 'touch-slider-prev') {
				self.scrollPosition += self.scrollWidth;
			}
			if (self.scrollPosition > 0) {
				self.scrollPosition = 0;
			}
			
			self.$containerScroller.animate({scrollLeft : -self.scrollPosition}, 500, function(){});
			
			return false;
		})
		
	};
})(jQuery);