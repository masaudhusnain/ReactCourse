import React from 'react'

const Login = () => {
    const handleonsubmit =(e)=>{
    e.preventDefault()
    console.log('on submit fires')
    }
  return (
    <div>
     <form onSubmit={handleonsubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' id="password"/>
  </div>
 
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login
