import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <div className="not-found">
                <h2>404, Page Not Found</h2>
            </div>
        </>
    );
};

export default NotFound;