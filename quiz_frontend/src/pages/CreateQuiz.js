import React, { useState } from "react";
import { createQuiz } from "../api/quizApi";
import { useNavigate } from "react-router-dom";
import "./CreateQuiz.css";

const CreateQuiz = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [questions, setQuestions] = useState([{ text: "", options: ["", "", "", ""], correctOption: 0 }]);
    const navigate = useNavigate();

    const handleAddQuestion = () => {
        setQuestions([...questions, { text: "", options: ["", "", "", ""], correctOption: 0 }]);
    };

    const handleQuestionChange = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].text = value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (qIndex, oIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].options[oIndex] = value;
        setQuestions(updatedQuestions);
    };

    const handleCorrectOptionChange = (qIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].correctOption = value; // Ensure it's a number
        setQuestions(updatedQuestions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newQuiz = { title, category, questions };
        try {
            await createQuiz(newQuiz);
            alert("Quiz created successfully!");
            navigate("/dashboard");
        } catch (error) {
            console.error("Error creating quiz:", error);
            alert("Failed to create quiz.");
        }
    };

    return (
        <div className="create-quiz-container">
            <h2>Create a New Quiz</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Quiz Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </div>

                <h3>Questions</h3>
                {questions.map((question, qIndex) => (
                    <div key={qIndex} className="question-group">
                        <label>Question {qIndex + 1}</label>
                        <input
                            type="text"
                            value={question.text}
                            onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                            required
                        />
                        <div className="options-group">
                            {question.options.map((option, oIndex) => (
                                <div key={oIndex} className="option-input">
                                    <input
                                        type="text"
                                        value={option}
                                        onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                        <label>Correct Answer</label>
                        <select value={question.correctOption} onChange={(e) => handleCorrectOptionChange(qIndex, Number(e.target.value))}>
                            {question.options.map((_, oIndex) => (
                                <option key={oIndex} value={oIndex}>
                                    Option {oIndex + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}

                <button type="button" className="add-question-btn" onClick={handleAddQuestion}>
                    + Add Question
                </button>
                <button type="submit" className="submit-btn">Create Quiz</button>
            </form>
        </div>
    );
};

export default CreateQuiz;
