const express = require('express');
const app = express();

const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));


app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

var app = App.new({
  name: "small-sharp-tool",
  description: "This app does one little thing, and does it well."
})

App.fetch("github:zeke/slideshow", function(err, manifest) {
  console.log(err, manifest)
})

App.example
