//GIVEN a weather dashboard with form inputs
//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
//WHEN I view the UV index
//THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city
//WHEN I open the weather dashboard
//THEN I am presented with the last searched city forecast

$(document).ready(function(){
    const apiKey ="a6ed307e0d393685de5ab5ab77958fdb";
    const loadLocal = window.localStorage.getItem("city")
    
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + APIKey;

    function timeUpdate (){
        $("#currentDay").text(moment().format("MMMM Do YYYY, H:mm"));

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
    $(".city").html("<h1>" + response.name + "</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".temp").text("Temperature (K) " + response.main.temp);
    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

});

function renderButtons(){
    $("#search-button").empty();
    for (let i=0; i <city.length; i++ ){
    
    }
}


$("#add-city").on("click",function(event) {
    event.preventDefault();
    let something = $("#city-input").val().trim();
    city.push(city);

    renderButtons();
});


$(document).on("click", "search-button", displayWeather);
renderButtons();

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    let cityDiv = $("<div class='city'>")
    $("#search-button").prepend(cityDiv);
    });

});
