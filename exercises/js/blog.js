var options = {
  blog: $("#blog h3")
}

var HiddenTextRevealer = function (options){
  this.headings = options.blog;
}

HiddenTextRevealer.prototype.toggleText = function(){
  this.headings.on("click", function(event){
    event.preventDefault();
    var heading = $(this);
    heading.siblings("p.excerpt").slideToggle();
    heading.closest("li").siblings().find("p.excerpt:visible").slideUp();
  });
};

$(document).ready(function(){
  var reveal = new HiddenTextRevealer(options);
  reveal.toggleText();
});
