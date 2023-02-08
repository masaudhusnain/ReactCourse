import React from 'react'
//import Homepic from './Homepic.png'

const Home = () => {
  
  return (
   
    <div className = 'container'>
       <h2>Meet The Team</h2>
<br></br>
<div className="row">
  <div className="column">
    <div className="card"  style={{width: '25rem'}}>
      <img src="/images/Architect.jpg"  className="card-img-top" alt="..."/>
      <div className="card-body">
        <h2>Ar.Muhammad Maruf Chaudhary</h2>
        <p className="title">Founder & Chief Architect</p>
        <p>alkaramah.arch@gmail.com</p>
        <p><button className="button">Contact No : 0335-1031031</button></p>
      </div>
    </div>
  </div>
<br></br>
  <div className="column">
    <div className="card" style={{width: '25rem'}}>
    <img src="/images/Naveed.jpg"  className="card-img-top" alt="..."/>
      <div className="card-body">
        <h2>Naveed Minhas</h2>
        <p className="title">Senior Draftsman</p>
        <p>alkaramah.arch@gmail.com</p>
        <p><button className="button">Contact No : 0335-1031031</button></p>
      </div>
    </div>
  </div>
  <br></br>
  <div className="column">
    <div className="card" style={{width: '25rem'}}>
      <img src="/images/images.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h2>Jamshaid Ali</h2>
        <p className="title">Site Supervisor</p>
        <p>alkaramah.arch@gmail.com</p>
        <p><button className="button">Contact No : 0335-1031031</button></p>
      </div>
    </div>
  </div>
  </div>
</div>
  )
}

export default Home

