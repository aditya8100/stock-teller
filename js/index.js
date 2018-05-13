$('#content').append("<img class=\"loading\" src=\"assets/loading.gif\" height=\"160\" width=\"241\" margin=\"0\" padding=\"0\"/>")

// Initial
$.get("https://cors-anywhere.herokuapp.com/https://stock-predictor-server.herokuapp.com/losers", function(response) {
  let responseAsString = JSON.stringify(response);
  let responseAsJSON = JSON.parse(responseAsString)
  console.log("In initial " + responseAsJSON.losers.length)
  console.log(responseAsJSON.losers)
  console.log(responseAsJSON.percentages)

  var losers = responseAsJSON.losers
  var percentages = responseAsJSON.percentages

  for(var i=0; i < percentages.length - 1; i+=1) {
    for(var j=0; j < percentages.length - 1 - i; j+=1) {
      if (percentages[j] < percentages[j+1]) {
        var temp = percentages[j];
        percentages[j] = percentages[j+1];
        percentages[j+1] = temp;

        temp = losers[j]
        losers[j] = losers[j+1]
        losers[j+1] = temp
      }
    }

    percentages[i] = percentages[i].toFixed(2)
    percentages[i+1] = percentages[i+1].toFixed(2)
  }
  console.log(losers)
  console.log(percentages)
  var i=0;
  losers.forEach(element => {
    console.log('Inside foreach initial')
    $('.loading').remove();
    let toAppend = "<p class=\"loser\">" + element + "&nbsp;&nbsp;&nbsp;&nbsp;🔻" + percentages[i] + "%</p>";
    $('.content').append(toAppend);
    // $('#content').append("<img class=\"loading\" src=\"assets/loading.gif\" height=\"100\" width=\"100\" margin=\"0\" padding=\"0\"/>")
    i = i + 1;
  });
});

setTimeout(function() {
  $('.loading').remove()
}, 5000);

setInterval(function() {
  // $('#content').append("<img class=\"loading\" src=\"assets/loading.gif\" height=\"100\" width=\"100\" margin=\"0\" padding=\"0\"/>")
  $.get("https://cors-anywhere.herokuapp.com/https://stock-predictor-server.herokuapp.com/losers", function(response) {
    let responseAsString = JSON.stringify(response);
    let responseAsJSON = JSON.parse(responseAsString)
    console.log("In refresh " + responseAsJSON.losers.length)
    console.log(responseAsJSON.losers)
    console.log(responseAsJSON.percentages)

    var losers = responseAsJSON.losers
    var percentages = responseAsJSON.percentages
    for(var i=0; i < percentages.length - 1; i+=1) {
      for(var j=0; j < percentages.length - 1 - i; j+=1) {
        if (percentages[j] < percentages[j+1]) {
          var temp = percentages[j];
          percentages[j] = percentages[j+1];
          percentages[j+1] = temp;
  
          temp = losers[j]
          losers[j] = losers[j+1]
          losers[j+1] = temp
        }
      }

      percentages[i] = percentages[i].toFixed(2)
      percentages[i+1] = percentages[i+1].toFixed(2)
    }
    console.log(losers)
    console.log(percentages)
    $('.loser').remove()
    var i=0;
    losers.forEach(element => {
      console.log('Inside foreach refresh')
      // $('.loading').remove();
      let toAppend = "<p class=\"loser\">" + element + "&nbsp;&nbsp;&nbsp;&nbsp;🔻" + percentages[i] + "%</p>";
      $('.content').append(toAppend);
      // $('#content').append("<img class=\"loading\" src=\"assets/loading.gif\" height=\"100\" width=\"100\" margin=\"0\" padding=\"0\"/>")
      i = i + 1;
    });
  });

  // $('.loading').remove();
}, 1000);
