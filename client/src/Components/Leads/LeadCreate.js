import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

export default () => { //firstName, lastName, Address, City, Zip, Xencall, Type, Phone 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [Zip, setZip] = useState('');
    const [Type, setCampaign] = useState('');
    const [Phone, setphone] = useState('');
    const history = useHistory();

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4001/addLead', {
            firstName, lastName, Address, City, Zip, Type, Phone
        });
        setFirstName('');
        setLastName('');
        setAddress('');
        setCity('');
        setZip('');
        setCampaign('');
        setphone('');
        history.push('/');

    };
    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>First Name</label>
                <input value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control" />
                <label>Last Name</label>
                <input value={lastName} onChange={e => setLastName(e.target.value)} className="form-control" />
                <label>Address</label>
                <input value={Address} onChange={e => setAddress(e.target.value)} className="form-control" />
                <label>City</label>
                <input value={City} onChange={e => setCity(e.target.value)} className="form-control" />
                <label>Zip</label>
                <input value={Zip} onChange={e => setZip(e.target.value)} className="form-control" />
                <label>Telephone</label>
                <input value={Phone} onChange={e => setphone(e.target.value)} className="form-control" />
                <label>Campaign</label>
                <input value={Type} onChange={e => setCampaign(e.target.value)} className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
};