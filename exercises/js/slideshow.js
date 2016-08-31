var options = {
  slideshow : $("#slideshow")
}

var SlideshowCreator = function(options){
  this.slideshow = options.slideshow;
}

SlideshowCreator.prototype.startShow = function() {
  this.cssClasses();

  var slideshowContainer = $("<div></div>").prependTo("body");
  slideshowContainer.addClass('slideshow-div');
  
  this.slideshow.appendTo(slideshowContainer);

  this.counter = $("<p></p>").appendTo(slideshowContainer);
  var thumbnailsContainer = $("<div></div>").appendTo(slideshowContainer);
  thumbnailsContainer.addClass('thumbnails');
  
  this.thumbs = this.slideshow.find("img").clone();
  this.thumbs.appendTo(thumbnailsContainer);

  this.slides = this.slideshow.find("li");
  this.totalSlides = this.slides.length;
  this.slides.hide();

  this.slideChanger();
};

SlideshowCreator.prototype.cssClasses = function() {
  $("<style type='text/css'> \
    .slideshow-div{ \
      height : 470px; \
      border : 2px solid black; \
      padding : 4px \
    } </style>").appendTo("head");
  
  $("<style type='text/css'> \
    .thumbnails img{ \
      height : 40px; \
      margin : 10px; \
    } </style>").appendTo("head");

  $("<style type='text/css'> \
    .current-thumbnail{ \
      border : 3px solid grey; \
    } </style>").appendTo("head");
};

SlideshowCreator.prototype.slideChanger = function() {
  var index = 0;
  this.currentSlide(index);
  index++;
  var _this = this;
  if(index < this.totalSlides){
    setInterval(function(){
      _this.currentSlide(index);
      if(++index == _this.totalSlides){
        index = 0;
      }
    }, 3250);
  }
};

SlideshowCreator.prototype.currentSlide = function(index) {
  this.thumbs.eq(index).addClass("current-thumbnail");
  this.thumbs.eq(index).siblings().removeClass("current-thumbnail");
  this.slides.eq(index).fadeIn(50).delay(3000).fadeOut(200);
  this.counter.html("<b>Slide " + (index + 1) + " of " + this.totalSlides + "</b>");
};

$(document).ready(function(){
  var show = new SlideshowCreator(options);
  show.startShow();
});
