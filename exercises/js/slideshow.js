var options = {
  slideshow : $("#slideshow")
}

var SlideshowCreator = function(options){
  this.slideshow = options.slideshow;
}

SlideshowCreator.prototype.startShow = function() {
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

  this.slideChanger();
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
