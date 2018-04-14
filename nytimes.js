//Grabbed from NYTimes API console
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

//search variables
// var searchInput = $("#searchInput").val();
/*var numberRecords = $("#numberRecords").val().trim();
var startYear = $("#startYear").val().trim();
var endYear = $("#endYear").val().trim();*/

// var search = $("#searchterm").val()
// url += '?' + $.param({
//   'api-key': "183179af597e4276aed50bd560c165b9",
//   'q': searchInput,
// });
// console.log("test: " + url)
$(document).ready(function() {
    $("#submit").on("click", function (event) {
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        var searchInput = $("#searchInput").val();
        var startYear = $("#startYear").val().trim();
        url += '?' + $.param({
            'api-key': "183179af597e4276aed50bd560c165b9",
            'q': searchInput,
            'begin_date': startYear
        });

        $.ajax({
            url: url,
            method: 'GET',
          }).then(function(response) {
            var results = response.response.docs
            console.log(results);

            var i
            for (i = 0; i < results.length; i++) {
                var articleDiv = $("<div class=article> <a href='" + results[i].web_url + "'>"+results[i].headline.main+"</a>");
                $("#panelHeader").append(articleDiv);
            };



          }).fail(function(err) {
            throw err;
          });
    });
});