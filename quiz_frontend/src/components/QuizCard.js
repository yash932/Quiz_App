import React from "react";

const QuizCard = ({ title, category, onClick }) => {
    return (
        <div
            className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
            onClick={onClick}
        >
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-600">{category}</p>
        </div>
    );
};

export default QuizCard;