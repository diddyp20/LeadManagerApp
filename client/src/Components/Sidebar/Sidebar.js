import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";
import '../Sidebar/Sidebar.css';

export default()=>{
    return<div>
         <nav className='nav-menu active'>
                    <ul className='nav-menu-items'>
                        <li className='nav-text'>
                            <Link to='/AdminLead'>
                                <SiIcons.SiCampaignmonitor />
                                <span>Campaign</span>
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to='/ViewDisposition'>
                                <FaIcons.FaCheckCircle />
                                <span>Dispositions</span>
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to='#'>
                                <AiIcons.AiOutlineClear />
                                <span>Clean SkipTracing</span>
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to='#'>
                                <FaIcons.FaCloudUploadAlt />
                                <span>Upload Leads</span>
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to='#'>
                                <GrIcons.GrUserManager />
                                <span>Manage Users</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
    </div>
};
