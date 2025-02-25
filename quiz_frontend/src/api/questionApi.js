import axios from "axios";

const API_URL = 'http://localhost:5000/api/questions';

export const addQuestion = async (questionData) => {
    return await axios.post(API_URL, questionData);
};

export const getQuestionsByQuiz = async (quizId) => {
    return await axios.get(`${API_URL}/${quizId}`);
};