//$(document).ready(function () {
let group = [''];
const APIKey = "a6ed307e0d393685de5ab5ab77958fdb";

function displaySearchCity(searchValue) {

}

let queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Tucson,Arizona&appid=" + APIKey;


$.ajax({

    url: queryURL,
    method: "GET",

}).then(function (response) {

    console.log(queryURL);
    console.log(response);
    // Transfer content to HTML
    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);

    // Convert the temp to fahrenheit
    let tempF = (response.main.temp - 273.15) * 1.80 + 32;

    // add temp content to html
    $(".temp").text("Temperature (K) " + response.main.temp);
    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

    // Log the data in the console as well
    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity: " + response.main.humidity);
    console.log("Temperature (F): " + tempF);


});




function renderButtons() {

    // Deleting the city prior to adding new city
    // (this is necessary otherwise you will have repeat buttons)
    $("#btn-group").empty();

    // Looping through the array of city
    for (let i = 0; i < group.length; i++) {

        // Then dynamicaly generating buttons for each city in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        let a = $("<button>");
        // Adding a class of city-btn to our button
        a.addClass("city-btn");
        // Adding a data-attribute
        a.attr("data-name", group[i]);
        // Providing the initial button text
        a.text(group[i]);
        // Adding the button to the btn-group div
        $("#btn-group").append(a);
    }
}

// This function handles events where a city button is clicked
$("#add-city").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    let city = $("#city-input").val().trim();

    // Adding city from the textbox to our array
    group.push(group);

    // Calling renderButtons which handles the processing of our city array
    renderButtons();
});

// Adding a click event listener to all elements with a class of "city-btn"
$(document).on("click", ".city-btn", displaySearchCity);

// Calling the renderButtons function to display the initial buttons
renderButtons();



//});

