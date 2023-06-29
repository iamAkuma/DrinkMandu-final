import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar';
export default function Admin() {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/admin", {
        
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: credentials.email, password: credentials.password })
    
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
          //save the auth toke to local storage and redirect
          localStorage.setItem('userEmail', credentials.email)
          localStorage.setItem('token', json.authToken)
          navigate("/");
    
        }
        else {
          alert("Enter Valid Credentials")
        }
      }
    
      const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
      }
  return (
    <div>
        <div>
            <Navbar></Navbar>
        </div>
         <div style={{backgroundImage: 'url("https://cdn.vox-cdn.com/thumbor/8zX9C04GCHA9HvJR7PjsJneqLUg=/0x0:2600x1733/1200x800/filters:focal(1092x659:1508x1075)/cdn.vox-cdn.com/uploads/chorus_image/image/66554227/shutterstock_616076909.0.jpg")', height: '100vh', backgroundSize: 'cover' }}>
        <div className='container'>
        <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
          <div className="m-3">
            <h3 className='d-flex justify-content-center'>Admin Login</h3>
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange}  aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">Login with admin credentials.</div>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
          </div>
          <div className="d-flex justify-content-center">

          <button type="submit" className="m-3  btn btn-danger">Login As Admin</button>
          <Link to="/login" className="m-3  btn btn-success">Login As User</Link>
          </div>
        </form>

      </div>
      </div>
    </div>
  )
}
