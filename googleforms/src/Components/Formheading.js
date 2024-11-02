import React from 'react';
import { Link } from 'react-router-dom';
import './Formheading.css';

function Formheading() {
  return (
    <div className='formheadingdiv'>
      <div className="headingdiv">
        <div className='questiondiv'>
          <p>Questionform</p>
          <div className='resdiv'>
            <Link to="/submissions">Responses</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formheading;
