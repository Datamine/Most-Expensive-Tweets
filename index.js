$(document).ready(function() {
    $.ajax({
        url: "https://raw.githubusercontent.com/Datamine/Most-Expensive-Tweets/master/expensive.json",
        dataType: "json",
        success: function(response) {
            twttr.ready(function (twttr) {
                for (var i = 0; i < response.length; i++) {
                    let tweetblob = response[i]
                    $('#tweet-container').append(`
                        <div class='center-container ranking'>
                            #${i+1}
                        </div>
                        <div class='center-container'>
                            <div id='${i}' align='center'>
                            </div>
                        </div>
                    `);
                    twttr.widgets.createTweet(
                      tweetblob.status_id,
                      document.getElementById(`${i}`),
                    );
                    $('#tweet-container').append(`
                        <div class='center-container'>
                            <p class='description'>
                                Cost: <b>${tweetblob.cost_usd}</b>
                            </p>
                            <p class='description' style='text-align:justify;'>
                                ${tweetblob.description}
                            </p>
                        </div>
                    `);
                }
            });
        }
    });
});
