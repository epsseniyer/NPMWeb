const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

app.get('/', (req, res) => {
     res.redirect('/index')
}); 
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, './web/main.html'));
}); 

app.get('/v1', (req, res) => {
    res.send('Hello World!')
}); 

app.get('/v2', (req, res) => {
    res
    .status(201) // 201 = Created
    .set({
      'X-Custom-Header': "Its A Header!",
      'Content-Type': 'text/html',
    })
    .send('<h1>Hello!</h1>');
}); 

// Configure the formatter to use 2 spaces for indentation. This is optional.
app.set('json spaces', 2);

// Let's return some JSON!
app.get('/headers', (req, res) => {
  res.status(200).json(req.headers);
});


app.listen(port, () => {
  console.log(`Listening on 103.5 Dawn FM http://localhost:${port}`);
}); // This Project maked with The weeknd's Songs
