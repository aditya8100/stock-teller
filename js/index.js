$.get('http://anyorigin.com/go?url=" + encodeURIComponent("https://en.wikipedia.org/wiki/List_of_S%26P_500_companies") + name + "&callback=?', function(response) {
  console.log(response);
});

