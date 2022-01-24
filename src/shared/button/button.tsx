import React, {ReactNode, useState} from "react";
import './button.scss';

interface Props {
}

type ButtonProps = {
    children: ReactNode;

}

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button
            className="btn-primary">
            {children || 'button'}
        </button>
    );
};

export default Button;