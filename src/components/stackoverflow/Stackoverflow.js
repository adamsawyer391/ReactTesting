import React from 'react'
import './Stackoverflow.css'
import SOAppbar from './components/SOAppbar';
import SOSidebar from './components/SOSidebar';
import TopSection from './components/TopSection';
import { Divider } from '@material-ui/core';
import MainContent from './components/MainContent';

function Stackoverflow() {

    return (
        <div>
            <SOAppbar />
            <div className="so-main-content-area">
                <div className="sidebar-so">
                    <div className="sidebar-so-l">

                    </div>
                    <div className="sidebar-so-r">
                        <SOSidebar />
                    </div>
                    
                </div>
                <div className="content-so">
                    <TopSection />
                    <Divider />
                    <MainContent />
                </div>
            </div>
        </div>
    )
}

export default Stackoverflow
