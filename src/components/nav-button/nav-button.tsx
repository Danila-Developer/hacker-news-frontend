import React, {FC} from 'react';
import './nav-button.css'
import {Link} from "react-router-dom";

interface NavButtonProps {
    to: string;
    text: string;
}

const NavButton:FC<NavButtonProps> = ({to, text}) => {
    return (
        <div className='nav-button-wrapper'>
            <Link to={to}><div className='button' data-hover={text}>{text}</div></Link>
        </div>
    );
};

export default NavButton;