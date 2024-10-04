import React, { useState } from 'react';
import "./joblisting.css";
import NewJobModule from './NewJobModule';
import Footer from '../component/Footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Checknow from './Checknow';

const Joblisting = ({ user, handleLogout }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [checkPopup, setCheckPopup] = useState(false)
  const [jobs, setJobs] = useState([
    { jobTitle: "Frontend Dev", companyName: "Google", skills: ["Javascript", "React.js", "Node.js"], postedAt: "27 min ago", jobType: "Fulltime", jobLocation: "Remote" },
    { jobTitle: "Backend Developer", companyName: "IBM", skills: ["Angular", "Node.js"], postedAt: "1 hour ago", jobType: "Part-time", jobLocation: "Office" },
    { jobTitle: "Mobile Dev", companyName: "Facebook", skills: ["Flutter"], postedAt: "2 days ago", jobType: "Contract", jobLocation: "Remote" }
  ]);

  const addJob = (newJob) => {
    setJobs([...jobs, newJob]); 
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">About Us</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link>Welcome, {user.name}!</Nav.Link>
              <Nav.Link eventKey={2} href="/">
                <button onClick={handleLogout}>Logout</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='header'>
        <h3 className='headpost'>Open Job Listing</h3>
        <button onClick={() => setButtonPopup(true)} className='postButton'>Post a job</button>
        <NewJobModule trigger={buttonPopup} setTrigger={setButtonPopup} addJob={addJob} />
      </div>
      <div className='searchBar'>
         <select  className='jobType'>
         {/* name="jobTypeItem" id="jobTypeItem" */}
             <option value="fulltime">FullTime</option>
             <option value="parttime">Part-Time</option>
             <option value="contract">Contract</option>
         </select>
         <select className='jobType'>
         {/* name="jobLocationItem" id="jobLocationItem"  */}
             <option value="inoffice">Office</option>
             <option value="remote">Remote</option>
         </select>
         <button className='jobType'>Search</button>

       </div>

      <div className='jobListing'>
        {jobs.map((job, index) => (
          <div className='jobCard1' key={index}>
            <div>
              <h4>{job.jobTitle}</h4>
              <p className='companyName'>{job.companyName}</p>
            </div>
            <div className='skills'>
              {job.skills.map((skill, i) => (
                <span key={i} className={`skill${i}`}>{skill}</span>
              ))}
            </div>
            <div className='time'>
              <p>{job.postedAt} | {job.jobType} | {job.jobLocation}</p>
            </div>
            <button className='checknow' onClick={() => setCheckPopup(true)}>Check Now</button>
            <Checknow trigger={checkPopup} setTrigger = {setCheckPopup}>
            </Checknow>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Joblisting;

