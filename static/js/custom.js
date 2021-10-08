console.log("custom.js")

$.ajax({
    type: "GET",
    dataType: "json",
    url: "https://icanhazdadjoke.com/",
    complete: function(data) {
        console.log(data.responseJSON.joke)
        $('.dadjoke').html(data.responseJSON.joke);
    }
});
