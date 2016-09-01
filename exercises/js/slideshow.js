var slideshowOptions = {
  slideshow : $("#slideshow")
}

var SlideshowCreator = function(slideshowOptions){
  this.slideshow = slideshowOptions.slideshow;
}

SlideshowCreator.prototype.start   = function() {
  var slideshowContainer = $("<div></div>");
  slideshowContainer.addClass('slideshow-div');
  
  var thumbnailsContainer = $("<div></div>");
  thumbnailsContainer.addClass('thumbnails');
  
  this.thumbs = this.slideshow.find("img").clone();

  this.slides = this.slideshow.find("li");
  this.totalSlides = this.slides.length;
  this.slides.hide();

  this.slideshow.appendTo(slideshowContainer);
  this.counter = $("<p></p>").appendTo(slideshowContainer);
  this.thumbs.appendTo(thumbnailsContainer);
  thumbnailsContainer.appendTo(slideshowContainer);
  slideshowContainer.prependTo("body");

  this.slides.eq(0).fadeIn(500);
  this.slideChanger(this.slides.eq(0));
};

SlideshowCreator.prototype.slideChanger = function(current) {
  var _this = this;
  if($(current).nextAll().length == 0){
    next = this.slides.eq(0);
  }
  else{
    next = current.next();
  }

  var num = $(current).prevAll().length;
  this.counter.html("<b>Slide " + (num + 1) + " of " + this.totalSlides + "</b>");
  this.thumbs.eq(num).addClass("current-thumbnail");
  this.thumbs.eq(num).siblings().removeClass("current-thumbnail");

  setTimeout(function() {
    $(current).fadeOut(400, function() {
      $(next).fadeIn(400);
      _this.slideChanger(next);
    });
  }, 3000);
};

$(document).ready(function(){
  var show = new SlideshowCreator(slideshowOptions);
  show.start();
});
