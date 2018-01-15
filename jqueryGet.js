$(function() {
  // const site = 'https://api.github.com/users/pkbanks';
  // const site = 'https://twitter.com/';
  ajaxCall(site);
})


function ajaxCall(site) {
  
  $('a').click(function(evt) {
    evt.preventDefault();
    $.get(site, function(result) {
      $('body').append(compileData(result));
    });
  })
}

function compileData(data) {
  // data is a js object
  output = "<dl>"
  for(let key in data) {
    output += "<dt>"
    output += key
    output += "</dt>"
    output += "<dd>"
    output += data[key]
    output += "</dd>"
    
  }
  output += "</dl>"

  return output;
}







