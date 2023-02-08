import React, { Component } from 'react'


export class CommercialItem extends Component {
  render() {
    let { title, description, imageurl, url } = this.props
    /*const ClickHandler=()=>{
    const Newurl= {url}
    console.log('Trigger Fire')
    console.log(Newurl)
    window.open(Newurl,'New Window','_parent')
         }*/
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel='noreferrer' href={url} target='_blank' className="btn btn-sm btn-dark"  >Click for Project Details</a>
          </div>
        </div>
      </div>
    )
  }
}
export default CommercialItem


