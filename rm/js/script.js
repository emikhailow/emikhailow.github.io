$(document).ready(function(){
		  
		  $('.carousel').carousel({
			  interval: 2000
			})
		  $(".clickable").click(function(){
				window.location=$(this).find("a").attr("href"); 
				return false;
		  });
		  $('#carousel').flexslider({
		    animation: "slide",
		    controlNav: false,
		    animationLoop: false,
		    slideshow: false,
		    itemWidth: 210,
		    itemMargin: 5,
		    asNavFor: '#slider'
		  });
		 
		  $('#slider').flexslider({
		    animation: "slide",
		    controlNav: false,
		    animationLoop: false,
		    slideshow: false,
		    sync: "#carousel"
		  });
		  $(".fancybox").fancybox({
		        beforeLoad: function() {
		            this.title = $(this.element).attr('caption');
		        }

		    });
		   $('.fancybox-image').fancybox({
			  padding: 0,
			  helpers: {
			    overlay: {
			      locked: false
			    }
			  }
			});
		});