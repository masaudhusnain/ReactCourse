import React from 'react'

const InformationItem = (props) => {
    const {Information} = props;
  return (
    <div className='col-md-3'>
        <div className="card my-3">

  <div className="card-body">
    <h5 className="card-title">{Information.name}</h5>
    <p className="card-text">{Information.email}</p>
    <p className="card-text">{Information.subject}</p>
    
  </div>
</div>
    
    </div>
  )
}

export default InformationItem
