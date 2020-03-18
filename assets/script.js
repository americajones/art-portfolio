// const jsonPortfolio = "portfolio.JSON";
// const portfolio = JSON.parse(jsonPortfolio);


// console.log("oho", portfolio);
// console.log("ohoho", portfolio.images[1]);


// $.getJSON( "portfolio.json", function( data ) {
//     var images = [];
//     $.each( data, function( key, val ) {
//       images.push( "<li id='" + key + "'>" + val + "</li>" );
//     });

//     $( "<ul/>", {
//       "class": "my-new-list",
//       html: items.join( "" )
//     }).appendTo( ".portfolio-content" );
//   });

// import { images } from "./images.js";

console.log("array: ", images);
console.log("index 3 tagged: ", images[3].tagged);

function fillportfolio() {
$.each(images, function (index, value) {
    console.log(index, value);
    console.log(value.name);
    let maybeSomething;
    if (value.wideImage) {
        maybeSomething = "h";
    } else maybeSomething = "";

    let imageDiv = $("<div class='image-box'>");
    let image = $(`<img class= 'preview-img ${maybeSomething}' src = '${value.url}' id='${index}' alt='${value.name}'>`);
    let name = $(`<p class= 'info'> ${value.name} </p>`);
    imageDiv.append(image, "<br>", name);
    $(".portfolio-content").append(imageDiv)
});
};

fillportfolio();


// $(".preview-img").on("click", function() {
// });

$('#Fullscreen').css('width', $(document).outerHeight() + 'px');
//for when you click on an image
$('.preview-img').click(function () {
    console.log(this.id);
    var src = $(this).attr('src'); //get the source attribute of the clicked image
    $('#Fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
    console.log(src);
    $('#Fullscreen').fadeIn("fast");

    var indexNum = this.id;
    var lastImage = $("#Fullscreen img");
//     var picSrc1 = $(`#${this.id - 1}`);
//     var picSrc2 = $(`#${this.id + 1}`);
//    var sauce1 = picSrc1.attr("src");
//    var sauce2 = picSrc2.attr("src");
    $(window).keydown(function(e){
    
        if (e.keyCode == 37) { //left arrow key 
        lastImage.hide();
        indexNum--;
            if(indexNum == -1) indexNum = 1;
        var sauce =$(`#${indexNum}`).attr("src");
        $("#Fullscreen img").attr('src', sauce).fadeIn();
    }
    if (e.keyCode == 39) { //right arrow key
        lastImage.hide();
        indexNum++;
        var sauce =$(`#${indexNum}`).attr("src");
            if(indexNum == 15) indexNum = 0;
        $("#Fullscreen img").attr('src', sauce).fadeIn();
        }
    });
});
$('#Fullscreen').click(function () {
    $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
});
