var options = {
  special : $("#specials")
}

var ContentLoader = function(options) {
  this.special = options.special;
}

ContentLoader.prototype.init = function() {
  select = this.special.find("select");
  targetDiv = $("<div></div>");
  targetDiv.insertAfter(this.special.find("form"));
  this.getJSON();
};

ContentLoader.prototype.getJSON = function() {
  var jsonData = null;
  var _this = this;
  $.ajax({
          type : 'get',
          dataType : 'json',
          url : './data/specials.json',
          success : function(result) {
            jsonData = result;
            _this.onChange(jsonData);
          }
        });
};

ContentLoader.prototype.onChange = function(jsonData) {
  select.on("change", function(){
    var daySpecial = null;
    $.each(jsonData, function(key, value){
      if(select.val() == key){
        daySpecial = value;
      }
    });

    if(daySpecial == null){
      targetDiv.empty();
    }
    else{
      var html = '<h3>' + daySpecial.title + '</h3>';
      html += '<p>' + daySpecial.text + '</p>';
      targetDiv.html(html);
      $('<img/>').attr('src', daySpecial.image).appendTo(targetDiv);
      targetDiv.css('color', daySpecial.color);
    }
  });
  this.special.find("form .buttons").remove();
};

$(document).ready(function(){
  var load = new ContentLoader(options);
  load.init();
});
