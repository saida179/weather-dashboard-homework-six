$(document).ready(function () {

    //function displaySearchCity(searchValue) {
        let APIKey = "a6ed307e0d393685de5ab5ab77958fdb";
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + APIKey + "&units=imperial";
        

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


   // };


});

