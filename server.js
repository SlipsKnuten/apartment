const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

app.use(cors()); // Allow all origins for development

app.use(express.json());

// Define your routes
app.get('/api/apartments', (req, res) => {
  // Your route handler
});

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});


dotenv.config();
connectDB();


app.use(cors());
app.use(express.json());

app.use('/api/apartments', require('./routes/apartments'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
