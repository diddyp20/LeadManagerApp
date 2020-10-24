import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CampaignCreate from './Components/Campaigns/CampaignCreate';
import CampaignView from './Components/Campaigns/CampaignView';
import LeadCreate from './Components/Leads/LeadCreate';
import LeadView from './Components/Leads/LeadView';
import DispositionView from './Components/Dispositions/DispositionView';
import DispositionCreate from './Components/Dispositions/DispositionCreate';
import DispositionUpdate from './Components/Dispositions/DispositionUpdate';
import LeadUpdate from './Components/Leads/LeadUpdate';
import LeadDelete from './Components/Leads/LeadDelete';


export default () => {
  return <div>
    <nav className="navbar navbar-expand-lg  navbar-light bg-light">
      <a className="navbar-brand" href="/">
      <img src="/BND.jpeg" width="50" height="50" alt=""></img></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ViewCampaign">Campaigns</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ViewDisposition">Dispositions</a>
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <br></br>
    </div>
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/AddLead" component={LeadCreate} />
          <Route path="/UpdateLead" component={LeadUpdate} />
          <Route path="/DeleteLead" component={LeadDelete} />
          <Route exact path="/" component={LeadView} />
          <Route path="/AddCampaign" component={CampaignCreate} />
          <Route path="/ViewCampaign" component={CampaignView} />
          <Route path="/ViewDisposition" component={DispositionView} />
          <Route path="/AddDisposition" component={DispositionCreate} />
          <Route path="/UpdateDisposition" component={DispositionUpdate} />
        </Switch>
      </BrowserRouter>
    </div>
  </div>
};