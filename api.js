const apiUrl = (location.hostname == "localhost" || location.hostname == "127.0.0.1")
   ? "http://localhost:3000"
   : "https://kantuta.herokuapp.com"

module.exports = apiUrl