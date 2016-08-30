var options = {
  searchInput : $("input[name='q']")
}

function InputHintMaker(options){
  this.searchInput = options.searchInput;
}

InputHintMaker.prototype.showHint = function() {
  var labelText = this.searchInput.siblings("[for='q']").remove().text();
  this.searchInput.val(labelText)
                  .addClass("hint")
                  .on("focus", function(){
                    $(this).val("").removeClass("hint");
                  })
                  .on("blur", function(){
                    if($.trim($(this).val()) == ""){
                      $(this).val(labelText).addClass("hint");
                    }
                  });
};

$(document).ready(function(){
  var hint = new InputHintMaker(options);
  hint.showHint();
});
