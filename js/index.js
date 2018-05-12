$('#content').append("<img class=\"loading\" src=\"assets/loading.gif\" height=\"100\" width=\"100\" margin=\"0\" padding=\"0\"/>")

// Initial 
$.get("https://cors-anywhere.herokuapp.com/https://stock-predictor-server.herokuapp.com/losers", function(response) {
  let responseAsString = JSON.stringify(response);
  let responseAsJSON = JSON.parse(responseAsString)
  console.log("In initial " + responseAsJSON.losers.length)
  responseAsJSON.losers.forEach(element => {
    console.log('Inside foreach initial')
    $('.loading').remove();
    let toAppend = "<p class=\"loser\">" + element + "</p>";
    $('.content').append(toAppend);
    $('#content').append("<img class=\"loading\" src=\"assets/loading.gif\" height=\"100\" width=\"100\" margin=\"0\" padding=\"0\"/>")
  });
});

setInterval(function() {
  $.get("https://cors-anywhere.herokuapp.com/https://stock-predictor-server.herokuapp.com/losers", function(response) {
    let responseAsString = JSON.stringify(response);
    let responseAsJSON = JSON.parse(responseAsString)
    console.log("In refresh " + responseAsJSON.losers.length)
    $('.loser').remove()
    responseAsJSON.losers.forEach(element => {
      console.log('Inside foreach refresh')
      $('.loading').remove();
      let toAppend = "<p class=\"loser\">" + element + "</p>";
      $('.content').append(toAppend);
      $('#content').append("<img class=\"loading\" src=\"assets/loading.gif\" height=\"100\" width=\"100\" margin=\"0\" padding=\"0\"/>")
    });
  });
}, 5000);