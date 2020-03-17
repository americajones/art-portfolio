function fillsketchbook() {
    $.each(sketches, function (index, value) {
        console.log(index, value);
        console.log(value.name);
    
        let imageDiv = $("<div class='image-box'>");
        let image = $(`<img class= 'preview-img' src = '${value.url}' id='${index}'>`);
        imageDiv.append(image);
        $(".portfolio-content").append(imageDiv)
    });
    };
fillsketchbook();

$('#Fullscreen').css('height', $(document).outerWidth() + 'px');
//for when you click on an image
$('.preview-img').click(function () {
    console.log(this.id);
    var src = $(this).attr('src'); //get the source attribute of the clicked image
    $('#Fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
    console.log(src);
    $('#Fullscreen').fadeIn("fast");

    var indexNum = this.id;
    var lastImage = $("#Fullscreen img");
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
