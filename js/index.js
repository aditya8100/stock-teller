$('#content').append("<img class=\"loading\" src=\"assets/loading.gif\" height=\"160\" width=\"241\" margin=\"0\" padding=\"0\"/>")
var losers, percentages;
// Initial
$.get("https://cors-anywhere.herokuapp.com/https://stock-predictor-server.herokuapp.com/losers", function(response) {
  let responseAsString = JSON.stringify(response);
  let responseAsJSON = JSON.parse(responseAsString)
  console.log("In initial " + responseAsJSON.losers.length)
  console.log(responseAsJSON.losers)
  console.log(responseAsJSON.percentages)

  losers = responseAsJSON.losers
  percentages = responseAsJSON.percentages

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
  }


  for(var i=0; i < percentages.length; i++) {
    percentages[i] = (percentages[i] * 1).toFixed(2);
  }
  jQuery.ajaxSetup({async:false});
  
  console.log(losers)
  console.log(percentages)
  var i=0;
  var j=0;
  for(i=0; i < losers.length; i++) {
    console.log('Inside foreach initial')
    $.get("https://cors-anywhere.herokuapp.com/https://www.investopedia.com/markets/stocks/" + losers[i].toLowerCase() + "/historical/", function(response) {
        const toCheck = "<span style=\"text-transform:none;\" id=\"quoteName\">";
        var indexOfName = response.indexOf(toCheck) + toCheck.length;
        var indexOfNameEnd = response.indexOf("</span>", indexOfName + 1);
        var name = response.substring(indexOfName,indexOfNameEnd);
        name = name.trim();
        console.log("name: " + name)
        let toAppend = "<p class=\"loser\">" + name + " - " + losers[j] + "&nbsp;&nbsp;&nbsp;&nbsp;🔻" + percentages[j] + "%</p><br>";
        $('.content').append(toAppend);
        j++;
        $('.loading').remove();
    });
  }
    // $('#content').append("<img class=\"loading\" src=\"assets/loading.gif\" height=\"100\" width=\"100\" margin=\"0\" padding=\"0\"/>")
    jQuery.ajaxSetup({async:true});
  });

setTimeout(function() {
  $('.loading').remove()
}, 30000);

setInterval(function() {
  // $('#content').append("<img class=\"loading\" src=\"assets/loading.gif\" height=\"100\" width=\"100\" margin=\"0\" padding=\"0\"/>")
  $.get("https://cors-anywhere.herokuapp.com/https://stock-predictor-server.herokuapp.com/losers", function(response) {
    let responseAsString = JSON.stringify(response);
    let responseAsJSON = JSON.parse(responseAsString)
    console.log("In refresh " + responseAsJSON.losers.length)
    console.log(responseAsJSON.losers)
    console.log(responseAsJSON.percentages)

    var losersRefresh = responseAsJSON.losers
    var percentagesRefresh = responseAsJSON.percentages
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
    }

    for(var i=0; i < percentages.length; i++) {
      percentages[i] = (percentages[i] * 1).toFixed(2);
    }

    if (losers.length == losersRefresh.length) {
      var checker = 0;
      for(var i=0; i < losers.length; i++) {
        if (losers[i] != losersRefresh[i]) {
          checker = 1;
        }
      }

      if (checker == 0) {
        console.log('Inside return')
        return;
      }
    }

    losers = losersRefresh;
    percentages = percentagesRefresh

    console.log(losers)
    console.log(percentages)
    $('.loser').remove()
    var i=0;
    losers.forEach(element => {
      console.log('Inside foreach refresh')
      // $('.loading').remove();
      $.get("https://cors-anywhere.herokuapp.com/https://www.investopedia.com/markets/stocks/" + element.toLowerCase() + "/historical/", function(response) {
        const toCheck = "<span style=\"text-transform:none;\" id=\"quoteName\">";
        var indexOfName = response.indexOf(toCheck) + toCheck.length;
        var indexOfNameEnd = response.indexOf("</span>", indexOfName + 1);
        var name = response.substring(indexOfName,indexOfNameEnd);
        name = name.trim();
        console.log("name: " + name)
        let toAppend = "<p class=\"loser\">" + name + " - " + element + "&nbsp;&nbsp;&nbsp;&nbsp;🔻" + percentages[i] + "%</p><br>";
        $('.content').append(toAppend);
        i = i + 1;
      });
      // $('#content').append("<img class=\"loading\" src=\"assets/loading.gif\" height=\"100\" width=\"100\" margin=\"0\" padding=\"0\"/>")
     
    });
  });

  // $('.loading').remove();
}, 600000);
