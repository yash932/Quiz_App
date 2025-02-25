import React, { useEffect, useState } from "react";
import { fetchQuizzes } from "../api/quizApi";
import { useNavigate } from "react-router-dom";
import QuizCard from "../components/QuizCard";
import Button from "../components/Button"; // Assuming a reusable button component
import './Dashboard.css'

const Dashboard = () => {
    const [quizzes, setQuizzes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadQuizzes = async () => {
            const response = await fetchQuizzes();
            setQuizzes(response.data);
        };
        loadQuizzes();
    }, []);

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">Your Dashboard</h2>

            {/* Buttons for Create Quiz and Give Quiz */}
            <div className="dashboard-buttons">
                <Button text="Create Quiz" onClick={() => navigate("/create-quiz")} className="create-btn" />
                <Button text="Give Quiz" onClick={() => navigate("/quizzes")} className="give-btn" />
            </div>

            <h3 className="quiz-list-title">Available Quizzes</h3>
            <div className="quiz-list">
                {quizzes.map((quiz) => (
                    <QuizCard key={quiz.id} title={quiz.title} category={quiz.category} onClick={() => navigate(`/quiz/${quiz.id}`)} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
