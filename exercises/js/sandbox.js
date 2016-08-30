// Exercise 1: Selecting

$("div.module");

$("#myListItem");
$("#myList li").eq(2);
$("#myList #myListItem");

$("label[for='q']");

$(":hidden").length;

$("img[alt]").length;

$("#fruits tbody tr:even");

// Exercise 2: Traversing

$("img").each(function(){
  console.log($(this).attr("alt"));
});

$("input[name='q']").closest('form').addClass('myClass');

$("#myList li.current").removeClass("current").next().addClass("current");

$("#specials select").closest("form").find("input.input_submit");

$("#slideshow li:first").addClass("current").siblings().addClass("disabled");

// Exercise 3: Manipulating

var uList = $("#myList");
for(var index = 1; index <= 5; index++){
  var item = $("<li></li>").appendTo(uList);
  item.text("New List Item " + index);
}

$("#myList li:even").remove();

$("div.module:last").append("<h2>New heading h2</h2>").append("<p>New paragraph</p>");

$("select[name='day']").append("<option value='wednesday'>Wednesday</option>");

var image = $("img:first");
$("<div class='module'></div>").append(image.clone()).insertAfter('div.module:last');
