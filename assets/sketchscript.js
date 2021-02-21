function fillsketchbook() {
    $.each(sketches, function (index, value) {
        let maybeSomething;
        if (!value.wideImage) {
            maybeSomething = "w";
        } else maybeSomething = "";

        let imageDiv = $("<div class='sketch-box'>");
        let image = $(`<img class= 'preview-img ${maybeSomething}' src = '${value.url}' id='${index}'>`);
        imageDiv.append(image);
        $(".portfolio-content").append(imageDiv)
    });
    };
fillsketchbook();

$('#Fullscreen').css('height', $(document).outerHeight() + 'px');
//for when you click on an image
$('.preview-img').click(function () {
    var src = $(this).attr('src'); //get the source attribute of the clicked image
    $('#Fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
    $('#Fullscreen').show();

    var indexNum = this.id;
    var lastImage = $("#Fullscreen img");
    $(window).keydown(function(e){
    
        if (e.keyCode == 37) { //left arrow key 
            indexNum--;
            console.log(indexNum);
        lastImage.hide();
            if(indexNum == 0) indexNum = 18;
        var sauce =$(`#${indexNum}`).attr("src");
        $("#Fullscreen img").attr('src', sauce).show();
    }
    if (e.keyCode == 39) { //right arrow key
        indexNum++;
        console.log(indexNum);
        lastImage.hide();
        var sauce =$(`#${indexNum}`).attr("src");
            if(indexNum == 19) indexNum = 0;
        $("#Fullscreen img").attr('src', sauce).show();
        }
    });
});
$('#Fullscreen').click(function () {
    $(this).hide(); //this will hide the fullscreen div if you click away from the image. 
});
