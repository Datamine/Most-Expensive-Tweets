$(document).ready(function() {
    $.ajax({
        url: "https://raw.githubusercontent.com/Datamine/Most-Expensive-Tweets/master/expensive.json",
        dataType: "json",
        success: function(response) {
            console.log(response);
        }
    });
});
