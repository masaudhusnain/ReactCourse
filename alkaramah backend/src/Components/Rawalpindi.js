import React from 'react'

const Rawalpindi = () => {
  
  return (
    
    <div className='container'>
      <div>
  <h2><i>Rawalpindi Projects Gallery</i></h2> 
</div>

<div className="row">
  <div className="column">
    <img src="/images/gilgit.jpg"  alt="Nature" style={{width:'100%'}} />
  </div>
  <div className="column">
    <img src="/images/gilgit.jpg"  alt="Snow" style={{width:'100%'}} />
  </div>
  <div className="column">
    <img src="/images/gilgit.jpg"  alt="Mountains" style={{width:'100%'}} />
  </div>
  <div className="column">
    <img src="/images/gilgit.jpg"  alt="Lights" style={{width:'100%'}} />
  </div>
</div>

<div className="container">
  <span onClick="this.parentElement.style.display='none'" className="closebtn">&times;</span>
  <img id="expandedImg" alt="..." style={{width:'100%'}}/>
  <div id="imgtext"></div>
  </div>

    </div>

  )
}

export default Rawalpindi
