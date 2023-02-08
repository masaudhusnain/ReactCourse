import React from 'react'
import ServicesAllOver from './ServicesAllOver.png'


const Services = () => {
  
    
  return (
    <div className= 'container'>
     
      <h2><i>Services / Projects all over the Pakistan</i></h2>
<p><i>Click on Cities to go to a new page and see pictures of the projects:</i></p>

<img id = 'myImgid' src={ServicesAllOver} alt="Workplace" useMap="#workmap" width="800" height="450"/>
<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="./Gilgit" target='_blank'/>
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="./Rawalpindi" target='blank'/>
  <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="./Commercial" target='blank'/>
</map>





      
    </div>
  
    
  

  )
}

export default Services
