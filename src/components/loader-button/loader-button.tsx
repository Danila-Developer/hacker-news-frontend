import React, {FC, useState} from 'react';
import './loader-button.css'

interface LoaderButtonProps {
    callback: () => Promise<any>;
}

const LoaderButton:FC<LoaderButtonProps> = ({callback}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const loaderButtonClickHandler = async () => {
        if (isLoading) return
        setIsLoading(true)
        callback()
            .then(() => setIsLoading(false))
    }

    return (
        <div className="container">
            <div className='loader-button-wrapper'>
                <div className={isLoading ? 'loader-button loader-button_loading': 'loader-button'}  data-hover='Update' onClick={loaderButtonClickHandler}>
                    <span className='loader-button__text'>Update</span>
                    <div className='loader-button__loader'>
                        <img src={process.env.PUBLIC_URL + 'img/loader.svg'} className='loader-button__loader__img'/>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default LoaderButton;