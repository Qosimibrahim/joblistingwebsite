//App.js
// import './App.css';
// import Login from './login/Login';
// import Signup from './signup/Signup';
// import Joblisting from './joblisting/Joblisting';
// import {RouterProvider, createBrowserRouter} from "react-router-dom";


// function App() {
//   const route = createBrowserRouter([
//     {
//       path: "/",
//       element: <Signup />,
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//        path: "/joblisting",
//        element: <Joblisting />,
//     },
//   ]);
//   return <div className='App'>
//       <RouterProvider router={route}></RouterProvider>
//     </div>
  
// }


// export default App;

//login.jsx

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Login({ handleLogin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem('user'));
    
//     if (storedUser && storedUser.email === email && storedUser.password === password) {
//       handleLogin(storedUser);
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <button type="submit">Login</button>

//       <Link to="/signup">Go to Signup</Link>
//     </form>
//   );
// }

// export default Login;

//signup

// import React, { useState } from 'react';

// function Signup({ handleLogin }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userData = { name, email, password };
//     localStorage.setItem('user', JSON.stringify(userData));
//     handleLogin(userData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }

// export default Signup;


//joblisting
// import React from 'react'
// import "./joblisting.css";
// import NewJobModule from './NewJobModule';
// import { useState } from 'react';
// import Checknow from './Checknow';
// import Checknowsecond from './Checknowsecond';
// import Checknowthird from './Checknowthird';
// import Footer from '../component/Footer';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// const Joblisting = ({ user, handleLogout }) => {
//     const [buttonPopup, setButtonPopup] = useState(false)
//     const [checkPopup, setCheckPopup] = useState(false)
//     const [checkSecond, setCheckSecond] = useState(false)
//     const [checkThird, setCheckThird] = useState(false)
//   return (
    
//     <div>
//       <div>
//       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">Home</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#features">About Us</Nav.Link>
//             <Nav.Link href="#pricing">Contact Us</Nav.Link>
//             <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Nav.Link><p>Welcome, {user.name}!</p></Nav.Link> 

//             <Nav.Link eventKey={2} href="/">
//             <button onClick={handleLogout}>Logout</button>
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//       </div>
//       <div className='header'><h3>Open Job Listing</h3>
//       <button onClick={() => setButtonPopup(true)} className='postButton'>Post a job</button>
//       <NewJobModule trigger={buttonPopup} setTrigger = {setButtonPopup}>
//         </NewJobModule>
//       </div>
//       <div className='searchBar'>
//         <select  className='jobType'>
//         {/* name="jobTypeItem" id="jobTypeItem" */}
//             <option value="fulltime">FullTime</option>
//             <option value="parttime">Part-Time</option>
//             <option value="contract">Contract</option>
//         </select>
//         <select className='jobType'>
//         {/* name="jobLocationItem" id="jobLocationItem"  */}
//             <option value="inoffice">Office</option>
//             <option value="remote">Remote</option>
//         </select>
//         <button className='jobType'>Search</button>

//       </div>
    
//       <div className='jobCard1'>
//         <div>
//             <h4>Frontend Dev</h4>
//             <p className='companyName'>Google</p>
//         </div>
//         <div className='skills'>
//             <spam className='jscript'>Javascript</spam>
//             <spam className='react'>React.js</spam>
//             <spam className='node'>Node.js</spam>
//         </div>
//         <div className='time'>
//             <p>27 min ago | Fulltime | Remote</p>
//             <button onClick={() => setCheckPopup(true)}>Check Now</button>
//             <Checknow trigger={checkPopup} setTrigger = {setCheckPopup}>
//         </Checknow>
//         </div>
//       </div>
//       <div className='jobCard1'>
//         <div>
//             <h4>Backend Developer</h4>
//             <p className='companyName'>IBM</p>
//         </div>
//         <div className='skills'>
//             <spam className='jscript'>Angular</spam>
//             <spam className='node'>Node.js</spam>
//         </div>
//         <div className='time'>
//             <p>1 hour ago | Part-time | Office</p>
//             <button onClick={() => setCheckSecond(true)}>Check Now</button>
//             <Checknowsecond trigger={checkSecond} setTrigger = {setCheckSecond}>
//         </Checknowsecond>
//         </div>
//       </div>
//       <div className='jobCard1'>
//         <div>
//             <h4>Mobile Dev</h4>
//             <p className='companyName'>Facebook</p>
//         </div>
//         <div className='skills'>
//             <spam className='jscript'>Flutter</spam>
//         </div>
//         <div className='time'>
//             <p>2 days ago | Contract | Remote</p>
//             <button onClick={() => setCheckThird(true)}>Check Now</button>
//             <Checknowthird trigger={checkThird} setTrigger = {setCheckThird}>
//         </Checknowthird>
//         </div>
//       </div>

      

    
//         <Footer />
        
//       </div>


    
//   )
// }

// export default Joblisting

//newmodule
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

