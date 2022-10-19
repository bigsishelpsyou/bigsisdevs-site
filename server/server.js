const express = require('express');
const app = express();
const path = require('path');

var port = "3000"
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));


// app.listen(port, () => {
//   console.log(`Server is up on port ${port}!`);
// });

// var app1= app.new({
//   name: "small-sharp-tool",
//   description: "This app does one little thing, and does it well."
// })

// app1.fetch("github:zeke/slideshow", function(err, manifest) {
//   console.log(err, manifest)
// // })

// app1.example
