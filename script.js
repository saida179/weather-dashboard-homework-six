// API key
let APIKey = "b04868ffacca8e05f416295d5d74ee96";
let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + APIKey;
let city =["Tucson", "Phoenix", "seattle","olympia"]
function theDay() {
    $("#currentDay").html(moment().format("MMMM Do YYYY, h:mm a"));
    console.log(currentDay)
}
//I used one of the activity for help
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    console.log(queryURL)
    console.log(response)
    console.log(response.main.temp)
    let temp =(response.name.temp - 273.15) * 1.80 + 32;
    console.log(temp)
    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".temp").text("Temperature (K) " + response.main.temp);
    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

});

function renderButtons(){
    $("#city-search").empty();
    for (let i=0; i <city.length; i++ ){
    
    }
}


$("#add-city").on("click",function(event) {
    event.preventDefault();
    let something = $("#city-input").val().trim();
    city.push(city);

    renderButtons();
});


$(document).on("click", ".movie-btn", displayWeather);
renderButtons();

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    let cityDiv = $("<div class='city'>")
    $("#city-search").prepend(cityDiv);
    });
