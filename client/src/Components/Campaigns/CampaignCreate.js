import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

export default () => {
    const [campaignName, setCampaignName] = useState('');
    const [campaignState, setCampaignState] = useState('');
    const [campaignDescription, setCampaignDescription] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4001/campaigns/addCampaign', { campaignName, campaignState, campaignDescription });
        setCampaignName('');
        setCampaignState('');
        setCampaignDescription('');
    };

    return <div className="container">
        <div className="row">
            <div className="col-lg-2"><Sidebar /></div>
            <div className="col-lg-10">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Campaign Name</label>
                        <input value={campaignName} onChange={e => setCampaignName(e.target.value)} className="form-control" />
                        <label>Campaign State</label>
                        <input value={campaignState} onChange={e => setCampaignState(e.target.value)} className="form-control" />
                        <label>Campaign Description</label>
                        <textarea rows="3" value={campaignDescription} onChange={e => setCampaignDescription(e.target.value)} className="form-control" />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>

};