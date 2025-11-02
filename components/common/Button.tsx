import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;