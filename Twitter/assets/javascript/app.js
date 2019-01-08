console.log("File link test!") //WORKING




$("#inputSubmit").on("click" , function () {
    event.preventDefault()
    var nameInput = $("#nameInput").val().trim()
    console.log(nameInput , "nameInput")
});

// var APIKey = "RGAPI-cd6d4704-d5e2-4ae4-ade2-6040918394b3" //Mr Medusa Riot API Key goes here
// var queryURL = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + nameInput + "?api_key=" + RiotAPIKey //structuring our queryURL based on GIPHY documentation
//   $.ajax({ //OPENING ASYNCHRONOUS JSON AND XML CALL
//       url: queryURL, //using queryURL structured variable TODO: Add limit parameter to queryURL
//       method: "GET" //GET method for getting GIFs back as response JSON
//   }).then(function(response) {
//       console.log(response.accountId , "Riot response")
//   });
// });