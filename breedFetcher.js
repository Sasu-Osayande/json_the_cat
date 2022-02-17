const request = require("request");

const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, function(error, response, body) {
  if (error) {
    return console.error("Error:", error);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    return console.log("BREED NOT FOUND");
  }
  console.log(data[0]["description"]);
});