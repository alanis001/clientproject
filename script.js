function giphyURLWithSearchTerm(searchTerm) {
    var myString ="https://www.omdbapi.com/?apikey=ac2d7e17&s=" + searchTerm;
    return myString;
}

function makeThumbnail(srcURL, caption) {
    return `
<div class=col-md-5>
  <div class="col-md-5">
    <div class="thumbnail">
      <a href="IMAGE_URL">
        <img src="IMAGE_URL" style="width:100%">
        <div class="caption">
          <p>CAPTION</p>
        </div>
      </a>
  </div>
<div>
`.replace("IMAGE_URL", srcURL).replace("IMAGE_URL", srcURL).replace("CAPTION", caption);
}

function appendImageToBody(srcURL, caption) {
    $('body').append(makeThumbnail(srcURL, caption));
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    console.log(giphyURLWithSearchTerm(searchTerm));
    $.ajax({
        url:giphyURLWithSearchTerm(searchTerm),
        method: "GET",
        success: function(response) {
            console.log(response);
            console.log(response['Search'][0]['Poster']);
            for (var i=0; i<10; i++) {
            if (response['Search'][i]['Poster'] !== "N/A") {
            appendImageToBody(response['Search'][i]['Poster'], response['Search'][i]['Title']);
                }
            }
        }
    });
}


$("#zaara").click(function(){
    var searchTerm = $("#search-text").val();
    callGiphyAPIWithSearchTerm(searchTerm);
     });

function getThumbnail(original, scale) {
  var canvas = document.createElement("canvas");

  canvas.width = original.width * scale;
  canvas.height = original.height * scale;

  canvas.getContext("2d").drawImage(original, 0, 0, canvas.width, canvas.height);

  return canvas;
}
$('#zaara').click(function () {
   $('thumbnail').html('thumbnail','');
});

$("#clear").click(function(){
$("searchTerm").hide('Search');
     });


$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    $('.logo_container, .slogan').css({
        'opacity': ((height - scrollTop) / height)
    }); 
});