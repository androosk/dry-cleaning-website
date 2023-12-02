const express = require('express');
const path = require('path');
const app = express();


const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});


app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`)
})