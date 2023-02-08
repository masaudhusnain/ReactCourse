import React from 'react';
import AddInformation from './AddInformation';

import Information from './Information';


const Contact = () => {
  
  return (
    <div className='container my-1'>
      <h2> <i>Reach us at</i> :</h2>
      <div style={{
        backgroundImage: "url(images/Contact.jpg)", backgroundSize: 'cover',
        height: '20vh'
      }}>
        <br></br>
        <b><i>Address :Agha Kamal Haider Road, Yousuf Plaza,
              2nd Floor, Saddar Bazar, Sialkot Cantt,<br></br>
          <br></br>
          Mobile No : 0335:1031031,<br></br>
          <br></br>
          Email Address : alkaramah.arch@gmail.com</i></b>
      </div>
      
    <AddInformation/>
<Information/>

    </div>
  )
}

export default Contact


