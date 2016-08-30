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
