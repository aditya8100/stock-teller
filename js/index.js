let url = "https://cors-anywhere.herokuapp.com/" + "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies";
$.get(url, function(response) {
  console.log(response);
});

