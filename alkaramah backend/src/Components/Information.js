import InformationContext from '../context/information/InformationContext';
import React,{ useContext,useEffect } from 'react';
import InformationItem from './InformationItem';



const Information = () => {
  const Context = useContext(InformationContext);
  const {Informations,AddInformation,GetInformation} = Context;
  useEffect(()=>{
    GetInformation()
  },[])
  
  return (
    
    <div>

      <div className='row my-3'>
  <h2><i>Your Booked Appointments</i></h2>
  {Informations.map((Information )=>{
return <InformationItem key={Information._id} Information={Information}/>
  })}
</div>
</div>
  )
}

export default Information
