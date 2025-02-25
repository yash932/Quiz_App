import axios from "axios";

const API_URL = 'http://localhost:5000/api/answers';

export const submitAnswer = async (answerData) => {
    return await axios.post(API_URL, answerData);
};