/**
 * ! NOTE: any edit to the server file will need manual server restart 
 * ! without live reload script
 */

// imports
const express = require('express')
const app = express()
const port = 4000

/**
 * * serve folder 'public' statically to url:port/public
 * * all files in 'public' folder will be available at: url:port/public/file.ext
 */
app.use("/public", express.static(__dirname + '/public'));
app.use("/pages", express.static(__dirname + '/public/pages'));

// handle the root route and send the 'index.html' file

/**
 * handle the root route and send the 'index.html' file
 * * NOTE: here we serve index.html publicly
 */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/pages/index.html')
})

// start the server and listen on the specified port
app.listen(port, () => { // <- the port here to listen on
  console.log(`Example app listening on port http://127.0.0.1:${port}`) // log when server is online
})