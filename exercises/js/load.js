var options = {
  blog : $("#blog")
}

var ContentLoader = function(options){
  this.blog = options.blog;
}

ContentLoader.prototype.init = function() {
  var headings = this.blog.find("h3");
  headings.each(function(){
    var heading = $(this);
    var targetDiv = $("<div></div>");
    heading.data("target", targetDiv);
    targetDiv.insertAfter(heading);

    heading.on("click", function(event){
      event.preventDefault();
      var id = "#" + heading.find("a").attr("href").split('#')[1];
      heading.data("target").load("./data/blog.html " + id);
    });
  });
};

$(document).ready(function(){
  var load = new ContentLoader(options);
  load.init();
});