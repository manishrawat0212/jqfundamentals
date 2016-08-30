var option = {
  modules: $("div.module")
}

var TabbedNavigators = function (option){
  this.modules = option.modules;
}

TabbedNavigators.prototype.addNavigations = function() {
  this.modules.hide();
  var navigation = $("<ul></ul>").insertBefore(this.modules.eq(0));

  this.modules.each(function(){
    var currentModule = $(this);
    var item = $("<li>" + currentModule.find("h2").text() + "</li>").appendTo(navigation);
    item.on("click", function(){
      item.addClass("current").siblings().removeClass("current");
      currentModule.show().siblings(".module").hide();
    });
  });

  this.modules.eq(0).show();
  navigation.find("li:eq(0)").addClass("current");
};

$(document).ready(function(){
  var tabs = new TabbedNavigators(option);
  tabs.addNavigations();
});
