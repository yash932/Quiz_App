import React, { useEffect, useState} from "react";
import { getQuestionsByQuiz } from '../api/questionApi';
import QuestionItem from '../components/QuestionItem';
import { useParams } from 'react-router-dom';

const Quiz = () => {
    const { quizId } = useParams();
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const loadQuestions = async () => {
            const response = await getQuestionsByQuiz(quizId);
            setQuestions(response.data);
        };
        loadQuestions();
    }, [quizId]);

    return (
        <div className="p-6">
            <h2 className="text-x1 font-bold mb-4">Quiz questions</h2>
            {questions.map((q) => (
                <QuestionItem key={q.id} text={q.text} options={q.options} />
            ))}
        </div>
    );
};

export default Quiz;