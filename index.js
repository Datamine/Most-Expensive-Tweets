$(document).ready(function() {
    $.ajax({
        url: "https://raw.githubusercontent.com/cben/sandbox/master/json/index.json",
        dataType: "json"
    }).done(function(result){
        for (var item in result) {
            console.log(item);
        }
    });
});
