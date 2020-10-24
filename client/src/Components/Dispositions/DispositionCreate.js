import React, { useState } from 'react';
import axios from 'axios';


export default () => { 
    const[dispositionName, setDispositionName]= useState('');
    const[dispositionDescription, setDispositionDescription] = useState('');

    const onSubmit = async(event)=>{
        event.preventDefault();
        await axios.post('http://localhost:4001/dispositions/addDispo', {dispositionName, dispositionDescription});
        setDispositionName('');
        setDispositionDescription(''); //dispositionDescription
    };
    return <div>
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <label>Disposition Name</label>
            <input value={dispositionName} onChange={e => setDispositionName(e.target.value)} className="form-control"/>
            <label>Disposition Description</label>
            <textarea rows="3" value={dispositionDescription} onChange={e => setDispositionDescription(e.target.value)} className="form-control"/>
        </div>
        <button className="btn btn-primary">Submit</button>
    </form>
</div>
};