import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default()=>{
    const history = useHistory();
    const[dispositons, setDispositions]=useState({});
    const [id, setId] = useState({});

    //fetch disposition
    const fetchDisposition = async()=>{
        const res = await axios.get('http://localhost:4001/dispositions/all');
        setDispositions(res.data);
    };

    useEffect(()=>{ fetchDisposition()}, []);

    const IconEdit = (x)=>{
         history.push('/UpdateDisposition', {id:x});
    };

    //function to map disposition
    const fetchedDispotions = Object.values(dispositons).map(x => {
        return <tr key={x._id}>
            <td>{x.dispositionName}</td>
            <td>{x.dispositionDescription}</td>
            <td><a className="action-btn"  onClick={()=> {IconEdit(x._id)}}><FontAwesomeIcon icon={faEdit}/></a></td>
            <td><FontAwesomeIcon icon={faTrash}/></td>
        </tr>
    });

    //function to navigate to create dispo
    const addDisposition = () =>{
        history.push('/AddDisposition');
    };


    //render the page
    return <div> <Table striped bordered hover>
        <thead>
            <tr>
                <th>Disposition Name</th>
                <th>Disposition Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {fetchedDispotions}
        </tbody>
    </Table>
        <div>
            <button className="btn btn-primary" onClick={addDisposition}>Create Disposition</button>
        </div>
    </div>
};