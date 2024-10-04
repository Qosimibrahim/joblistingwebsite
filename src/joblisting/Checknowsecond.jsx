import React from 'react'
import "./checknowsecond.css"

function Checknowsecond(props) {
  return (props.trigger) ? (
    <div className='jobDetails'>
    <div className='firstdiv'>
        <h3 className='front'>Frontend Developer @ Google</h3>
        <p>Posted on: 02/Sep/2024 02:11</p>
        <p>Job type: Full time</p>
        <p>Job description: Google Job, I'm telling ya</p>
        <p>Company name: Google</p>
        <p>Company website: https://www.google.com</p>
        <div className='skillss'>
        <h4>Skills</h4>
        <span className='first'>Javascript</span>
        <span className='second'>React.js</span>
        <span className='third'>Node.js</span>       
    </div>
    </div>
    
      <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
      <button className='apply' onClick={() => window.open('https://www.google.com', '_blank')}>Apply</button>
    </div>
  ) : "";
}

export default Checknowsecond
