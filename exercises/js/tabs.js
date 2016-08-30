$(document).ready(function(){
  var $modules = $("div.module");
  var tabs = new tabbedNavigation($modules);
  tabs.init();
});

function tabbedNavigation($modules){
  this.$modules = $modules;
}

tabbedNavigation.prototype.init = function() {
  this.$modules.hide();
  var $navigation = $("<ul></ul>").insertBefore(this.$modules.eq(0));

  this.$modules.each(function(){
    var $currentModule = $(this);
    var $item = $("<li>" + $currentModule.find("h2").text() + "</li>").appendTo($navigation);
    $item.bind("click", function(){
      $item.addClass("current").siblings().removeClass("current");
      $currentModule.show().siblings(".module").hide();
    });
  });

  this.$modules.eq(0).show();
  $navigation.find("li:eq(0)").addClass("current");
};
