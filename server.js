const express = require('express');
const connectDB = require('./config/db')

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('API Running'));

// Defin Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





  
  

// const express = require('express');
// const mongoose = require('mongoose');

// const users = require('./routes/api/users');
// const profile = require('./routes/api/profile');
// const posts = require('./routes/api/posts');

// const app = express();

// // DB Config
// const db = require('./config/keys').mongoURI;

// // Connect to MongoDB
// mongoose
//   .connect(db)
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// app.get('/', (req, res) => res.send('Hello World'));

// // Use Routes
// app.use('/api/users', users);
// app.use('/api/profile', profile);  
// app.use('/api/posts', posts);

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server running on port ${port}`));