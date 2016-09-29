$.ajax({
    type: "GET",
    url: "https://api.imgur.com/3/gallery/random/random/1",
    dataType: "text",
    beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Client-ID 190fadfd251efe5');
    },
    success: function(data) {
        var json = $.parseJSON(data);
        var links = json.data.map(function(item) {
            return [item.link, item.description, item.title];
        })

        console.log(json);

        console.log(links);

        var index = 0;

        for (var value of links) {
          $('.stuff').append('<div class="img-container img-container'+ index +'"></div>');
          $('.img-container'+ index).append('<img src="' + value[0] + '"/>');
          $('.img-container'+ index).append('<div class="img-text"></div>');
          $('.img-container'+ index + ' .img-text').append('<h3>'+ value[2] +'</h3>');
          if (!value[1]) {
            $('.img-container'+ index + ' .img-text').append('<p>No description</p>');
          } else {
            $('.img-container'+ index + ' .img-text').append('<p>'+ value[1] +'</p>');
          }
          $('.img-container'+ index + ' .img-text').append('<code>'+ value[0] +'</code>');
          index += 1;
        }
    }
});


//This is some useful code for fetching a totally random img from imgur, but it isnt really using the API
//It still workd tho.

/*

function randomString() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'; 
    var stringlength = 5; 
    var text = '';
    for (var i = 0; i < stringlength; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        text += chars.substring(rnum, rnum + 1);
    }
    //$('#output').text(text);
    var source = 'http://i.imgur.com/' + text + '.jpg';
  
    var image = new Image();
    image.onload = function() {
      if (this.width == 161) {
        randomString();
      } else {
        $('.stuff img').replaceWith(this);
      }
    };
    image.src = source;
}

$(document).ready(function() {
    randomString();
});

*/
