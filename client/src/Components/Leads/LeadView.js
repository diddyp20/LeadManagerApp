import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
// get our fontawesome imports
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default () => {
    const history = useHistory();
    const [leads, setLeads] = useState({});

    const fetchLeads = async () => {
        const res = await axios.get('http://localhost:4001/');
        setLeads(res.data);
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    const addLead = async () => {
       history.push("/AddLead");
    };

    //Edit Lead
    const IconEdit = async(x)=>{
        history.push('/UpdateLead', {id: x});
    };

    //Delete lead
    const IconDelete = async(_id)=>{
     history.push('/DeleteLead', {leadId: _id});
    };

    const renderedLeads = Object.values(leads).map(lead => {
        return <tr key={lead._id}>
            <td>{lead.firstName}</td>
            <td>{lead.lastName}</td>
            <td>{lead.Address}</td>
            <td>{lead.City}</td>
            <td>{lead.Type}</td>
            <td>{lead.Xencall}</td>
            <td>{lead.Phone}</td>
            <td><a className="action-btn"  onClick={()=> {IconEdit(lead._id)}}><FontAwesomeIcon icon={faEdit}/></a></td>
            <td><a className="action-btn"  onClick={()=> {IconDelete(lead._id)}}><FontAwesomeIcon icon={faTrash}/></a></td>
        </tr>
    });

    return <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Campaign</th>
                    <th>Disposition</th>
                    <th>Phone</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {renderedLeads}
            </tbody>
        </Table>
        <div>
            <button className="btn btn-primary" onClick={addLead}>Add Lead</button>
        </div>
    </div>
};