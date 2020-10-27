import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ViewCampaign from '../Campaigns/CampaignView';



export default () => {
    return<div className="container">
        <div className="row">
            <div className="col-lg-2"><Sidebar/></div>
            <div className="col-lg-10"><ViewCampaign/></div>
        </div>        
    </div>
};

