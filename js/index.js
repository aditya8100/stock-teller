var s_p500 = ["A","AAL","AAP","AAPL","ABBV","ABC","ABT","ACN","ADBE","ADI","ADM","ADP","ADS","ADSK","AEE","AEP","AES","AET","AFL","AGN","AIG","AIV","AIZ","AJG","AKAM","ALB","ALGN","ALK","ALL","ALLE","ALXN","AMAT","AMD","AME","AMG","AMGN","AMP","AMT","AMZN","ANDV","ANSS","ANTM","AON","AOS","APA","APC","APD","APH","APTV","ARE","ARNC","ATVI","AVB","AVGO","AVY","AWK","AXP","AYI","AZO","BA","BAC","BAX","BBT","BBY","BDX","BEN","BF.B","BHF","BHGE","BIIB","BK","BKNG","BLK","BLL","BMY","BRK.B","BSX","BWA","BXP","C","CA","CAG","CAH","CAT","CB","CBOE","CBRE","CBS","CCI","CCL","CDNS","CELG","CERN","CF","CFG","CHD","CHRW","CHTR","CI","CINF","CL","CLX","CMA","CMCSA","CME","CMG","CMI","CMS","CNC","CNP","COF","COG","COL","COO","COP","COST","COTY","CPB","CRM","CSCO","CSX","CTAS","CTL","CTSH","CTXS","CVS","CVX","CXO","D","DAL","DE","DFS","DG","DGX","DHI","DHR","DIS","DISCA","DISCK","DISH","DLR","DLTR","DOV","DPS","DRE","DRI","DTE","DUK","DVA","DVN","DWDP","DXC","EA","EBAY","ECL","ED","EFX","EIX","EL","EMN","EMR","EOG","EQIX","EQR","EQT","ES","ESRX","ESS","ETFC","ETN","ETR","EVHC","EW","EXC","EXPD","EXPE","EXR","F","FAST","FB","FBHS","FCX","FDX","FE","FFIV","FIS","FISV","FITB","FL","FLIR","FLR","FLS","FMC","FOX","FOXA","FRT","FTI","FTV","GD","GE","GGP","GILD","GIS","GLW","GM","GOOG","GOOGL","GPC","GPN","GPS","GRMN","GS","GT","GWW","HAL","HAS","HBAN","HBI","HCA","HCP","HD","HES","HIG","HII","HLT","HOG","HOLX","HON","HP","HPE","HPQ","HRB","HRL","HRS","HSIC","HST","HSY","HUM","IBM","ICE","IDXX","IFF","ILMN","INCY","INFO","INTC","INTU","IP","IPG","IPGP","IQV","IR","IRM","ISRG","IT","ITW","IVZ","JBHT","JCI","JEC","JNJ","JNPR","JPM","JWN","K","KEY","KHC","KIM","KLAC","KMB","KMI","KMX","KO","KORS","KR","KSS","KSU","L","LB","LEG","LEN","LH","LKQ","LLL","LLY","LMT","LNC","LNT","LOW","LRCX","LUK","LUV","LYB","M","MA","MAA","MAC","MAR","MAS","MAT","MCD","MCHP","MCK","MCO","MDLZ","MDT","MET","MGM","MHK","MKC","MLM","MMC","MMM","MNST","MO","MON","MOS","MPC","MRK","MRO","MS","MSCI","MSFT","MSI","MTB","MTD","MU","MYL","NAVI","NBL","NCLH","NDAQ","NEE","NEM","NFLX","NFX","NI","NKE","NKTR","NLSN","NOC","NOV","NRG","NSC","NTAP","NTRS","NUE","NVDA","NWL","NWS","NWSA","O","OKE","OMC","ORCL","ORLY","OXY","PAYX","PBCT","PCAR","PCG","PEG","PEP","PFE","PFG","PG","PGR","PH","PHM","PKG","PKI","PLD","PM","PNC","PNR","PNW","PPG","PPL","PRGO","PRU","PSA","PSX","PVH","PWR","PX","PXD","PYPL","QCOM","QRVO","RCL","RE","REG","REGN","RF","RHI","RHT","RJF","RL","RMD","ROK","ROP","ROST","RRC","RSG","RTN","SBAC","SBUX","SCG","SCHW","SEE","SHW","SIVB","SJM","SLB","SLG","SNA","SNPS","SO","SPG","SPGI","SRCL","SRE","STI","STT","STX","STZ","SWK","SWKS","SYF","SYK","SYMC","SYY","T","TAP","TDG","TEL","TGT","TIF","TJX","TMK","TMO","TPR","TRIP","TROW","TRV","TSCO","TSN","TSS","TTWO","TWX","TXN","TXT","UA","UAA","UAL","UDR","UHS","ULTA","UNH","UNM","UNP","UPS","URI","USB","UTX","V","VAR","VFC","VIAB","VLO","VMC","VNO","VRSK","VRSN","VRTX","VTR","VZ","WAT","WBA","WDC","WEC","WELL","WFC","WHR","WLTW","WM","WMB","WMT","WRK","WU","WY","WYN","WYNN","XEC","XEL","XL","XLNX","XOM","XRAY","XRX","XYL","YUM","ZBH","ZION","ZTS"];
var s_p500test = ["A","AAL","AAP","AAPL","ABBV","ABC","ABT","ACN","ADBE","COTY"];
// let date = new Date();
// var datePart = date.getDate() - 1;
// var monthPart = date.getMonth() + 1;
// var yearPart = date.getFullYear();

// if (datePart.length < 10) {
//   datePart = '0' + datePart;
// } if (monthPart < 10) {
//   monthPart = '0' + monthPart;
// }

// let dateAsString1 = monthPart + "." + datePart + "." + yearPart;


// datePart = date.getDate() - 2;
// monthPart = date.getMonth() + 1;
// yearPart = date.getFullYear();

// if (datePart < 1) {
//     monthPart = monthPart - 1;
//     if (monthPart == 0) {
//       datePart = 31;
//       monthPart = 12;
//       yearPart = yearPart - 1;
//     } if (monthPart == 1) {
//       datePart = 31;
//     } else if (monthPart == 2) {
//       datePart = 28;
//     } else if (monthPart == 2 && yearPart % 4 == 0) {
//       datePart = 29;
//     } else if (monthPart == 3) {
//       datePart = 31;
//     } else if (monthPart == 4) {
//       datePart = 30;
//     } else if (monthPart == 5) {
//       datePart = 31;
//     } else if (monthPart == 6) {
//       datePart = 30;
//     } else if (monthPart == 7) {
//       datePart = 31;
//     } else if (monthPart == 8) {
//       datePart = 31;
//     } else if (monthPart == 9) {
//       datePart = 30;
//     } else if (monthPart == 10) {
//       datePart = 31;
//     } else if (monthPart == 11) {
//       datePart = 30;
//     } else if (monthPart == 12) {
//       datePart = 31;
//     }
// } if (datePart < 10) {
//   datePart = '0'+ datePart;
// } if (monthPart < 10) {
//   monthPart = '0' + monthPart;
// }

// let dateAsString2 = monthPart + "." + datePart + "." + yearPart;
var i=0;
$('#content').append("<img class=\"loading\" src=\"assets/loading.gif\" height=\"100\" width=\"100\" margin=\"0\" padding=\"0\"/>")
s_p500.forEach(function(stock) {
    let today = 0, yesterday = 0, daybeforeyesterday = 0;
    let url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+ stock + "&apikey=AATETE6GWV5ROGH";
    let url1 = "https://cors-anywhere.herokuapp.com/https://www.investopedia.com/markets/stocks/" + stock.toLowerCase() + "/historical/"

    $.get(url1, function(response) {
      console.log("Inside response!");

      var indexOfhigh = response.indexOf("<tr class=\"in-the-money\">");
      indexOfhigh = response.indexOf("<td class=\"num\">",indexOfhigh + 1);
      indexOfhigh = response.indexOf("<td class=\"num\">",indexOfhigh + 1);
      indexOfhigh = indexOfhigh + 16;
      indexOfHighEnd = response.indexOf("</td>",indexOfhigh);
      today = response.substring(indexOfhigh,indexOfHighEnd);
      
      indexOfhigh = response.indexOf("<td class=\"num\">",indexOfhigh + 1);
      indexOfhigh = response.indexOf("<td class=\"num\">",indexOfhigh + 1);
      indexOfhigh = response.indexOf("<td class=\"num\">",indexOfhigh + 1);
      indexOfhigh = response.indexOf("<td class=\"num\">",indexOfhigh + 1);
      indexOfhigh = response.indexOf("<td class=\"num\">",indexOfhigh + 1);
      indexOfhigh = indexOfhigh + 16;
      indexOfHighEnd = response.indexOf("</td>",indexOfhigh);
      yesterday = response.substring(indexOfhigh,indexOfHighEnd);


      indexOfhigh = response.indexOf("<td class=\"num\">",indexOfhigh + 1);
      indexOfhigh = response.indexOf("<td class=\"num\">",indexOfhigh + 1);
      indexOfhigh = response.indexOf("<td class=\"num\">",indexOfhigh + 1);
      indexOfhigh = response.indexOf("<td class=\"num\">",indexOfhigh + 1);
      indexOfhigh = response.indexOf("<td class=\"num\">",indexOfhigh + 1);
      indexOfhigh = indexOfhigh + 16;
      indexOfHighEnd = response.indexOf("</td>",indexOfhigh);
      daybeforeyesterday = response.substring(indexOfhigh,indexOfHighEnd);

      console.log("Stock: " + stock + ", Day before yesterday: " + daybeforeyesterday + ", Yesterday: " + yesterday + ", Today: " + today);
      
      if (today != 0 && yesterday != 0) {
        let yesterdayToTodayPercentage = ((yesterday - today)/yesterday) * 100;
        let daybeforeyesterdayToYesterdayPercentage = ((daybeforeyesterday - yesterday)/daybeforeyesterday) * 100;
        console.log("Day Before Yesterday To Yesterday drop: " + daybeforeyesterdayToYesterdayPercentage + ", Yesterday to Today Drop: " + yesterdayToTodayPercentage);

        if (daybeforeyesterdayToYesterdayPercentage > 5 && yesterdayToTodayPercentage > 3) {
          let lineToAdd = "<p> " + stock + "</p>";
          $('.loading').remove();
          $('#content').append(lineToAdd);
          $('#content').append("<img class=\"loading\" src=\"assets/loading.gif\" height=\"100\" width=\"100\" margin=\"0\" padding=\"0\"/>")
        }
      }
      i = i + 1;

      if (i == s_p500.length) {
        $('.loading').remove();
      }
    });
});
