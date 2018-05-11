var request = require('request');
var cheerio = require('cheerio');

let apikey = "AATETE6GWV5ROGH";
let restUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=" + apikey;

function update() {
    let url = "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies";

    request.get(url, (err,res,body) => {
        if (!err && res.statusCode == 200) {
            console.log(body);
        }
    });
}