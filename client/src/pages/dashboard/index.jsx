import React, { useState } from 'react';

import style from './style.module.css';
import Header from '../../components/Header';

// protected routes
import DasboardApp from './DasboardApp';

function Dashboard(){
    const [isOpen, setOpen] = useState(false);
    // const userDetails = JSON.parse(localStorage.getItem('user_data') || '');
    
    return (
        <div className={`${style.init}`}>
            {/* Content area */}
            <div className={`${style.content_area}`}>
                {/*  Site header */}    
                <Header isOpen={isOpen} setOpen={setOpen}/>
                
                <main className="container-fluid pt-5 h-screen bg-white bg-white">
                    <DasboardApp/>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;