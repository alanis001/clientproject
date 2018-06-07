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
            for (var i=0; i<20; i++) {
            if (response['Search'][i]['Poster'] !== "N/A") {
            appendImageToBody(response['Search'][i]['Poster'], response['Search'][i]['Title'],response['Search'][i]['Year']);
                }
            }
        }
    });
}
function changeMargin(response) {
    '.col-md-5'.style.margin = "100px";
}




$("#zaara").click(function(){
    var searchTerm = $("#search-text").val();
    callGiphyAPIWithSearchTerm(searchTerm);
$(".col-md-5").css("margin", "100%");
     });



$("#clear").click(function(){
    $(".col-md-5").hide();
});

//  $('.bs-example-modal-lg').modal("show");
//  $('.bs-example-modal-lg').on('shown.bs.modal', function () {
//   $(".bs-example-modal-lg").modal("show");
// })
$("#buttoncom").click(function(){
alert("Thank you for the suggetsions!");
});

// try ro see on the bottom of this line if it works.



