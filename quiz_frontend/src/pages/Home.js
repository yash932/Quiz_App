import React, { useEffect, useState } from "react";
import { fetchQuizzes } from '../api/quizApi';
import QuizCard from "../components/QuizCard";
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button";

const Home = () => {
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
        <div className="p-6">
            <h2 className="text-x1 font-bold mb-4">Available Quizzes</h2>
            {quizzes.map((quiz) => (
                <QuizCard key={quiz.id} title={quiz.title} category={quiz.category} onClick={() => navigate(`/quiz/${quiz.id}`)} />    
            ))}
            <Button text="Login" className="mt-4 bg-blue-500" onClick={() => navigate('/login')} />
        </div>
    );
};

export default Home;