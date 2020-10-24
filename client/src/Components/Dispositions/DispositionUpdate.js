import React, { useState, useEffect } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import axios from 'axios';

export default()=>{
   const location = useLocation();
   const dispositionId = location.state.id;
   const[disposition, setDisposition]= useState([]);
   const[dispositionName, setDispositionName]= useState('');
   const[dispositionDescription, setDispositionDescription] = useState('');

   const fetchUniqueDispo = async()=>{
       const res = await axios.get(`http://localhost:4001/dispositions/${dispositionId}`);
       setDisposition(res.data);
       setDispositionName(res.data.dispositionName);
       setDispositionDescription(res.data.dispositionDescription);    
   };

   useEffect(()=>{fetchUniqueDispo()}, []);
   //initialize value with retrieved value
   

    //update disposition
    const onSubmit = (event)=>{
        event.preventDefault();
        console.log('here we will be updating the disposition');
        console.log(dispositionName+' description: '+dispositionDescription);
    };

   return <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
            <label>Disposition Name</label>
            <input value={dispositionName} onChange={e => setDispositionName(e.target.value)} className="form-control"/>
            <label>Disposition Description</label>
            <textarea rows="3" value={dispositionDescription} onChange={e => setDispositionDescription(e.target.value)} className="form-control"/>
        </div>
        <button className="btn btn-primary">Update</button>
    </form>
   </div>
};