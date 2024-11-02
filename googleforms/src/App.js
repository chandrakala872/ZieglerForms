// import React from 'react';
// import Header from "./Components/Header";
// import Questionform from './Components/Questionform' 
// import Formheading from './Components/Formheading'
// // import {BrowserRouter,Router,Route} from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';







// function App() {
//   return (
// //     <div>
// //   <Header/>
// //   <Formheading/>
// //   <Questionform />
// //   <BrowserRouter>
// //   <Router>
// //     <Route path="/question-form" component={Questionform} />

    
// //   </Router>
// //   </BrowserRouter>
  
 
 

// // </div>
  
// <BrowserRouter>
//       <div>
//         <Header />
//         <Formheading />
//         <Questionform/>
//         <Routes>
//           <Route path="/question-form" element={<Questionform />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
     



       
     
      

//   );
// }



// export default App;



// src/App.js
// import React, { useState } from 'react';
// import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
// // import QuestionForm from './Components/QuestionForm';
// import QuestionForm from './Components/QuestionForm';
// import Header from './Components/Header'

// import SubmissionList from './Components/SubmissionList';
// import Formheading from './Components/Formheading';


// const App = () => {
//     const [submissions, setSubmissions] = useState([]);

//     const handleFormSubmit = (submission) => {
//         setSubmissions([...submissions, submission]);
//     };

//     return (
        



//         <div className="app-container">
//             {/* <header className="app-header">
//                 <h1>Google Forms Clone</h1>
//             </header> */}

// <Router>
//             <Routes>
//                <Route path="/"element={<Formheading/>} />
//                <Route path="/submissions" element={<SubmissionList />} />
//             </Routes>
//         </Router>

//             <Header/>
//             <Formheading/>
//             <main>
//                 <QuestionForm onFormSubmit={handleFormSubmit} />
//                 <SubmissionList submissions={submissions} />
//             </main>
//         </div>
//     );
// };

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import SubmissionList from './Components/SubmissionList';
import Formheading from './Components/Formheading';
// import QuestionForm from './Components/QuestionForm';
import QuestionForm from './Components/QuestionForm';

const App = () => {
    const [submissions, setSubmissions] = useState([]);

    const handleFormSubmit = (submission) => {
        setSubmissions([...submissions, submission]);
    };

    return (
        <Router>
            <div className="app-container">
                <Header />
                <Routes>
                    <Route path="/" element={<Formheading />} />
                    <Route path="/submissions" element={<SubmissionList submissions={submissions} />} />
                    {/* <Route path="/submissions" element={<SubmissionList />} /> */}
                </Routes>
                <main>
                    {/* <QuestionForm onFormSubmit={handleFormSubmit} /> */}
                    <QuestionForm    onFormSubmit={handleFormSubmit}/>
                    
                </main>
            </div>
        </Router>
    );
};

export default App;

