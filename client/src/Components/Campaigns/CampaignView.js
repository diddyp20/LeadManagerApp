import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default() =>{
    const history = useHistory();
    const [campaign, setCampaign] = useState({});

    //fetch campaign
    const fetchCampaign = async()=>{
        const res = await axios.get('http://localhost:4001/campaigns/all');
        setCampaign(res.data);
    }

    //useeffect to pull the data
    useEffect(() => {
        fetchCampaign();
    }, []);

    const renderedCampaigns = Object.values(campaign).map(x => {
        return <tr key={x._id}>
            <td>{x.campaignName}</td>
            <td>{x.campaignState}</td>
            <td>{x.campaignDescription}</td>
            <td><FontAwesomeIcon icon={faEdit}/></td>
            <td><FontAwesomeIcon icon={faTrash}/></td>
            
        </tr>
    });

    //add campaign button to go the the page
    const addCampaigns = async() =>{
        history.push("/AddCampaign");
    };

    //dispaly campaigns
    return <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Campaign Name</th>
                    <th>Campaign State</th>
                    <th>Campaign Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {renderedCampaigns}
            </tbody>
        </Table>
        <div>
            <button className="btn btn-primary" onClick={addCampaigns}>Create Campaign</button>
        </div>
    </div>
};