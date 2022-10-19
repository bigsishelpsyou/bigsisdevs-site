const express = require('express');
const app = express();
import App from './app.json';

const path = require('path');

var port = "3000"
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));


app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

var app1= App.new({
  name: "small-sharp-tool",
  description: "This app does one little thing, and does it well."
})

App.fetch("github:zeke/slideshow", function(err, manifest) {
  console.log(err, manifest)
})

App.example
