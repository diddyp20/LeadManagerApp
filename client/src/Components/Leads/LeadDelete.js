import React, { useState, useEffect } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import axios from 'axios';

export default()=>{
    const Location = useLocation();
    const history = useHistory();
    const leadId =  Location.state.leadId;
    //delete lead and go back to previous screen
    const deleteLead = async()=>{
        await axios.delete(`http://localhost:4001/deleteById/${leadId}`);
        history.push('/');
    };
    useEffect(()=>{deleteLead()},[]);
  

    return<div>
    </div>
};