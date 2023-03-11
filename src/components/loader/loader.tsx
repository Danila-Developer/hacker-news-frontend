import React, {FC} from 'react';
import './loader.css'

const Loader:FC = () => {
    return (
        <div className='loader'>
            <img src={process.env.PUBLIC_URL + 'img/loader.svg'} alt="" className='loader__img'/>
        </div>
    );
};

export default Loader;