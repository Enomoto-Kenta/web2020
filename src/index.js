var http = require("http");
var fs = require("fs");

//create a server object:
http
  .createServer(function(req, res) {
    let url = req["url"];
    if (url.match(/\/$/)) url += "index.html";
    console.log("URL = " + url);
    try {
      fs.statSync("." + url);
      let text = fs.readFileSync("." + url);
      res.write(text); //write a response to the client
    } catch (err) {
      console.log("File is not found");
      res.write(fs.readFileSync("not_found.html"));
    }
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
