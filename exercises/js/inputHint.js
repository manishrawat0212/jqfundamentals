$(document).ready(function(){
  var $searchInput = $("input[name='q']");
  var $label = $("label[for='q']");
  var hint = new inputHint($searchInput, $label);
  hint.init();
});

function inputHint($searchInput, $label){
  this.$searchInput = $searchInput;
  this.$label = $label;
}

inputHint.prototype.init = function() {
  var labelText = this.$label.remove().text();
  this.$searchInput.val(labelText)
              .addClass("hint")
              .bind("focus", function(){
                $(this).val("").removeClass("hint");
              })
              .bind("blur", function(){
                if(!$.trim($(this).val())){
                  $(this).val(labelText).addClass("hint");
                }
              });
};
