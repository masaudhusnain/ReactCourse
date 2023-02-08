import React from "react";
import InformationContext from "./InformationContext";
import { useState } from "react";


const InformationState = (props)=>{
  const Host = "http://localhost:5000"

    const InformationInitial =[{
        "_id": "63d3bfa7e1cd70bc81ee6bd0",
        "name": "masaud",
        "email": "masaudhusnain10@gmail.com",
        "subject": "I want an appointment",
        "appoinmentdate": "2023-01-27T12:10:31.932Z",
        "__v": 0
      },
      {
        "_id": "63e3bfe65b615cc35cd47a56",
        "name": "masaud",
        "email": "masaudhusnain11@gmail.com",
        "subject": "I want an appointment",
        "appoinmentdate": "2023-01-27T12:13:26.642Z",
        "__v": 0
      },
      {
        "_id": "63f3bfe65c615cc35cd47a56",
        "name": "masaud",
        "email": "masaudhusnain11@gmail.com",
        "subject": "I want an appointment",
        "appoinmentdate": "2023-01-27T12:13:26.642Z",
        "__v": 0
      },
      {
        "_id": "63g3bfe65d615dc35cd47a56",
        "name": "masaudAdded",
        "email": "masaudhusnain20@gmail.com",
        "subject": "I want an new appointment",
        "appoinmentdate": "2023-01-27T12:13:26.642Z",
        "__v": 0
      }
      
    ]  
    const [Informations,setInformations]=useState(InformationInitial)

    //Add a Note
    const AddInformation= async (name,email,subject)=>{
      const response = await fetch(`${Host}/api/info/addinformation`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,email,subject}) 
      });
      
      console.log('Adding a new note');
        const Information={
            "_id": "63h3bfe95d61ecc35cd47a56",
            "name": name,
            "email": email,
            "subject": subject,
            "appoinmentdate": "2023-01-27T12:13:26.642Z",
            "__v": 0
          };
    setInformations(Informations.concat(Information))
    }

    //Fetch a Note
    const GetInformation= async ()=>{
      const response = await fetch(`${Host}/api/info/fetchallinformation`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const json=await response.json()
      console.log(json)
      setInformations(json)
    }


    return(
        
        <InformationContext.Provider value ={{Informations,AddInformation,GetInformation}}>
        {props.children}
        </InformationContext.Provider>
        
    )
}
export default InformationState;