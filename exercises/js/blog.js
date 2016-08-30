$(document).ready(function(){
  var $blogHeading = $("#blog h3");
  var reveal = new hiddenText($blogHeading);
  reveal.init();
});

function hiddenText($blogHeading){
  this.$blogHeading = $blogHeading;
}

hiddenText.prototype.init = function() {
  this.$blogHeading.bind("click", function(event){
  	var $heading = $(this);
    $heading.siblings("p.excerpt").slideToggle();
    $heading.parent().siblings().find("p.excerpt:visible").slideUp();
    event.preventDefault();
  });
};
