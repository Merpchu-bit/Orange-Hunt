$(".abuse").click(function() {
    $(".orange-t").hide();
    $(".abuse").hide();
    $(".friendly").hide();
    $(".revenge").show();
    $("h3").replaceWith("<h3>Ants have appeared! You have hurt a poor innocent tree and now you are riddled with bad luck! Get the oranges before they get them.</h3");
    $("h1").hide();
});



var count = 0;


$(".orange-s1").click(function() {
    $(".orange-s1").hide();
    $(".ant-1").hide();

    count++;
    $(".counter").html("My current count is: " + count);

});

$(".orange-s2").click(function() {
    $(".orange-s2").hide();
    $(".ant-2").hide();
    count++;
    $(".counter").html("My current count is: " + count);
});

$(".orange-s3").click(function() {
    $(".orange-s3").hide();
    $(".ant-3").hide();


    count++;
    $(".counter").html("My current count is: " + count);

});

$(".counter").dblclick(function(){
    $(".counter").hide();
      $("h3").replaceWith("<h3>You got the oranges! You place your oranges in a neat order in your basket. Placing the basket down on the table next to the tree you look at the birds in the sky. You look back to get your oranges back to go inside, only to find them missing!? Some random person took them into a truck and are now driving away! The truck is from coca-cola.</h3>");
        $(".continue").show();
    

});

$(".friendly").click(function() {
    $(".op-2").show();
    $(".orange-t").hide();
    $(".op-1").hide();
    $("h3").replaceWith("<h3>You are so weak that you can't pick the oranges with your weak nimble fingers. Pick a tool to get the oranges!</h3>");
});

$(".Knife1").click(function() {
    $(".knife").show();
    $(".knife").css("background-color","#ffe100");
});

$(".plant1").click(function() {
    $(".plant").show();
    $(".knife").hide();
    $(".plant").css("background-color","#ffe100");
});

$(".common1").click(function() {
    $(".common").show();
    $(".common").css("background-color","#ffe100");
    $(".common1").hide();
    $(".plant1").hide();
    $(".plant").hide();
    $(".Knife1").hide();
    $("h3").replaceWith("<h3>You got the oranges! You place your oranges in a neat order in your basket. Placing the basket down on the table next to the tree you look at the birds in the sky. You look back to get your oranges back to go inside, only to find them missing!? Some random person took them into a truck and are now driving away! The truck is from coca-cola.</h3>");
    $(".continue").show();
    $(".dull").hide();
     $(".scissors").hide();
     $(".sense").hide();

});