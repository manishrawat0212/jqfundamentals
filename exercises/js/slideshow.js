var slideshowOptions = {
  slides : $("#slideshow")
}

var SlideshowCreator = function(slideshowOptions){
  this.slides = slideshowOptions.slides.find("li");
}

SlideshowCreator.prototype.start = function() {
  this.createContainers();
  this.addThumbnails();
  this.addStyle();
  this.beginShow(this.slides.eq(0));
};

SlideshowCreator.prototype.createContainers = function() {
  this.slideshowContainer = $("<div></div>");
  this.slideshowContainer.addClass('slideshow-div');
  this.slideContainer = $("<div></div>");
  this.thumbnailsContainer = $("<div></div>");
  this.thumbnailsContainer.addClass('thumbnails');
};

SlideshowCreator.prototype.addThumbnails = function() {
  this.thumbs = this.slides.find("img").clone();
  this.slides.appendTo(this.slideContainer);
  this.counter = $("<p></p>").appendTo(this.thumbnailsContainer);
  this.thumbs.appendTo(this.thumbnailsContainer);
  this.slideContainer.appendTo(this.slideshowContainer);
  this.thumbnailsContainer.appendTo(this.slideshowContainer);
  this.slideshowContainer.prependTo("body");
};

SlideshowCreator.prototype.addStyle = function() {
  this.slides.addClass("slides");
  this.thumbnailsContainer.addClass("thumbs");
  this.totalSlides = this.slides.length;
  this.slides.hide();
  this.slides.eq(0).fadeIn(500);
};

SlideshowCreator.prototype.beginShow = function(current) {
  var _this = this;
  // if($(current).nextAll().length == 0){
  // if($(current).is(":nth-last-child(2)")){
  if($(current).is(":last-child")){  
    next = this.slides.eq(0);
  }
  else{
    next = current.next();
  }

  var num = $(current).prevAll().length;
  var counterText = "<b>Slide " + (num + 1) + " of " + this.totalSlides + "</b>";
  this.counter.html(counterText);
  this.thumbs.eq(num).addClass("current-thumbnail");
  this.thumbs.eq(num).siblings().removeClass("current-thumbnail");

  setTimeout(function() {
    _this.changeSlide(current, next);
  }, 3000);
};

SlideshowCreator.prototype.changeSlide = function(current, next) {
  $(current).fadeOut(400);
  $(next).fadeIn(400);
  this.beginShow(next);
};

$(document).ready(function(){
  var show = new SlideshowCreator(slideshowOptions);
  show.start();
});
