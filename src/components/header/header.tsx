import React, {FC} from 'react';
import './header.css'

const Header:FC = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>Hacker News</h1>
        </header>
    );
};

export default Header;