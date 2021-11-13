$("h1").css("color", "white");
$("h1").addClass("big-title new");
$("h1").text("Bye");
$("a").attr("href", "github.com/geeky01adarsh");
$("h1").click(function(){
    $("h1").css("color", "purple");
});

$("button").click(function(){
    // $("h1").animate({
    //     opacity:0.5
    // });

    // $("h1").toggle();

    // $("h1").slideToggle();

    $("h1").slideUp().slideDown().animate({opacity:0.5});
});

$("input").keydown(function(event){
    console.log(event.key);
    $("h1").test(bhaiya,tem);
});

