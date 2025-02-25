// import React from "react";

// const QuestiomItem = ({ text, options, onSelect }) => {
//     return (
//         <div className="mb-6">
//             <h4 className="font-bold mb-2">{text}</h4>
//             {options.map((option, index) (
//                 <button
//                     key={index}
//                     onClick={() => onSelect(option)}
//                     className="block w-full p-2 my-1 border rounded-md hover:bg-gray-200"
//                 >
//                     {option}
//                 </button>
//             ))}
//         </div>
//     );
// };

// export default QuestiomItem;


import React from 'react';

const QuestionItem = ({ text, options, onSelect }) => {
    return (
        <div className="mb-6">
            <h4 className="font-bold mb-2">{text}</h4>
            {options.map((option, index) => (
                <button 
                    key={index}
                    onClick={() => onSelect(option)}
                    className="block w-full p-2 my-1 border rounded-md hover:bg-gray-200"
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default QuestionItem;
