const express = require('express'),
      app = express(),
      port = 3000;

app.use(express.static(__dirname + '/public'));

app.listen(port, (err) => {
    if (err) {
        return console.log('erroe: ', err)
    }
    console.log(`server is listening on ${port}`)
})