// import React from 'react'
// import "./NewJobModule.css"

// function NewJobModule(props) {
//   return (props.trigger) ? (
//     <div className='newJobModule'>
//     <div className='newJobModule-inner'>
//       { props.children }
//       <h3>Post Job</h3>
//       <div className="inputGroup">
//         <div className='inputGroupInner'>
//             <input type="text" id="name" autoComplete="off" className="jobTitle" placeholder="Job title"/>
//             <select name="jobTypeItem" id="jobTypeItem" className='jobType'>
//                 <option value="fulltime">FullTime</option>
//                 <option value="parttime">Part-Time</option>
//                 <option value="contract">Contract</option>
//             </select>
//             <select name="jobLocationItem" id="jobLocationItem" className='jobType'>
//                 <option value="office">Office</option>
//                 <option value="remote">Remote</option>
//             </select>
//             <br />
//             <input type="text" id="" autoComplete="off" className="companyName" placeholder="Company Name" />
//             <input type="text" id="" autoComplete="off" className="companyURL" placeholder="Company website" />
//             <br />
//             <input type="text" id="" autoComplete="off" className="jobLink" placeholder="Job Link" />
//             <input type="text" id="" className="jobDescription" autoComplete="off" placeholder="Job Description" />
//         </div>
//         <div className='skills'>
//             <h4>Skills</h4>
//             <span className='first'>Javascript</span>
//             <span className='second'>React.js</span>
//             <span className='third'>Node.js</span>
//             <span className='fourth'>Vue</span>
//             <span className='fifth'>Firebase</span>
//             <span className='sixth'>Github</span>
//             <span className='seventh'>SQL</span>
//             <span className='eight'>MongoDB</span>
//         </div>

//       </div>

//       <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
//       <button className='submit'>Submit</button>
//     </div>
//     </div>
//   ) : "";
// }

// export default NewJobModule


import React, { useState } from 'react';
import "./NewJobModule.css";

function NewJobModule({ trigger, setTrigger, addJob }) {
  const [jobTitle, setJobTitle] = useState('');
  const [jobType, setJobType] = useState('fulltime');
  const [jobLocation, setJobLocation] = useState('office');
  const [companyName, setCompanyName] = useState('');
  const [companyURL, setCompanyURL] = useState('');
  const [jobLink, setJobLink] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      jobTitle,
      jobType,
      jobLocation,
      companyName,
      companyURL,
      jobLink,
      jobDescription,
      skills: ['Javascript', 'React.js', 'Node.js'],  // You can make this dynamic later
      postedAt: new Date().toLocaleString()  // Adds a timestamp
    };

    addJob(newJob);  // Add the new job to the job listing
    setTrigger(false);  // Close the popup after submission
  };

  return trigger ? (
    <div className='newJobModule'>
      <div className='newJobModule-inner'>
        <h3>Post Job</h3>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <div className='inputGroupInner'>
              <input 
                type="text" 
                className="jobTitle" 
                placeholder="Job title" 
                value={jobTitle} 
                onChange={(e) => setJobTitle(e.target.value)} 
                required 
              />
              <select 
                name="jobTypeItem" 
                className='jobType' 
                value={jobType} 
                onChange={(e) => setJobType(e.target.value)} 
              >
                <option value="fulltime">Full-Time</option>
                <option value="parttime">Part-Time</option>
                <option value="contract">Contract</option>
              </select>
              <select 
                name="jobLocationItem" 
                className='jobType' 
                value={jobLocation} 
                onChange={(e) => setJobLocation(e.target.value)} 
              >
                <option value="office">Office</option>
                <option value="remote">Remote</option>
              </select>
              <input 
                type="text" 
                className="companyName" 
                placeholder="Company Name" 
                value={companyName} 
                onChange={(e) => setCompanyName(e.target.value)} 
                required 
              />
              <input 
                type="text" 
                className="companyURL" 
                placeholder="Company website" 
                value={companyURL} 
                onChange={(e) => setCompanyURL(e.target.value)} 
              />
              <input 
                type="text" 
                className="jobLink" 
                placeholder="Job Link" 
                value={jobLink} 
                onChange={(e) => setJobLink(e.target.value)} 
              />
              <input 
                type="text" 
                className="jobDescription" 
                placeholder="Job Description" 
                value={jobDescription} 
                onChange={(e) => setJobDescription(e.target.value)} 
                required 
              />
            </div>
          </div>
          <button type="button" className='close-btn' onClick={() => setTrigger(false)}>Close</button>
          <button type="submit" className='submit'>Submit</button>
        </form>
      </div>
    </div>
  ) : null;
}

export default NewJobModule;
