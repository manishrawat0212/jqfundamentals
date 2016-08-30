var navOptions = {
  navigators : $("#nav li")
}

var DropDownMenu = function(navOptions){
  this.navigators = navOptions.navigators;
}

DropDownMenu.prototype.addMenu = function() {
  this.navigators.hover(function(){
    $(this).addClass("hover").find("ul").show();
  }, function(){
    $(this).removeClass("hover").find("ul").hide();
  });
};

$(document).ready(function(){
  var navigator = new DropDownMenu(navOptions);
  navigator.addMenu();
});
