const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config')
const cors = require('cors');
const { User, Quiz, Question, Answer } = require('./models');

// Import controllers
const authRoutes = require('./routes/authRoutes');
const quizRoutes = require ('./routes/quizRoutes');
const questionRoutes = require('./routes/questionRoutes');
const answerRoutes = require('./routes/answerRoutes')

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Test database connection
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/answers', answerRoutes);


// Sync models with database
sequelize.sync( )
    .then(() => console.log('Models synced with database...'))
    .catch(err => console.log('Error syncing models: ' + err));

// Define a simple route
app.get('/', (req, res) => {
    res.send('Trivia Quiz API is running...');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});