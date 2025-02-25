import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import CreateQuiz from "./pages/CreateQuiz";

const App = () => {
  return (
    <Router>
      <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* User Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Quiz Page */}
          <Route path="/quiz/:quizId" element={<Quiz />} />

          {/* Quiz Results Page */}
          <Route path="/results" element={<Results />} />

          {/* Create quiz page */}
          <Route path="/create-quiz" element={<CreateQuiz />} />
      </Routes>
    </Router>
  )
}
export default App;
