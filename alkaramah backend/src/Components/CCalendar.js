import React, { useState } from 'react';
import {Calendar}  from 'react-calendar';


const CCalendar = () => {
    const [value, onChange] = useState(new Date());

    return (
      <div class='container my-5'>
        <br></br>
        <Calendar onChange={onChange} value={value} />
        {value.toString()}

      
      </div>
    );
  }

export default CCalendar
