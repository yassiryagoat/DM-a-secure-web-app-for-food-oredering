import React, { useState,  useContext } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate }from "react-router-dom"
import { StoreContext } from "../../context/StoreContext"; // Import StoreContext


function Login() {

    const { setIsAuthenticated } = useContext(StoreContext); // Access setIsAuthenticated from context

    const [data, setData] = useState({ email: '', password: '' });
    
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isNotEmailValid, setIsNotEmailValid] = useState(false); 
    const [isPasswordValid, setIsPasswordValid] = useState(false);



    const navigate = useNavigate()
    
    const handleSubmit = (event) => {
        
        event.preventDefault();
        setFormSubmitted(true);
        

        // You can access email and password from data object for further processing
        console.log("Form submitted with:", data.email, data.password);
        
        axios.post('http://localhost:3001/login',{email:  data.email, password: data.password})
        .then( result => {
                            console.log(result)
                            if(result.data==='Login Succeeded'){
                                console.log('successeded login')
                                setIsAuthenticated(true);
                                navigate('/home')
                            }
                            if(result.data === 'Incorrect password'){
                                setIsPasswordValid(false);
                            }else{setIsPasswordValid(true)}
                            if(result.data==='Failed login: Email not found'){
                                setIsNotEmailValid(true);
                            }else{setIsNotEmailValid(false)}
                        })
        .catch(err=>console.log(err));
        // You can add logic here to send the login credentials to the server for authentication
    };

    return (

        <div className="login">
        <section className="vh-50 gradient-custom  bg-white">
      <div className="container py-2 h-50">
        <div className="row d-flex justify-content-center align-items-center h-50">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{borderRadius: "1rem" }}>
            <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="mb-4 text-center">Log in</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                <strong>Email</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="exemple@gmail.com"
                                autoComplete="off"
                                id="email"
                                name="email"
                                className="form-control"
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                            />
                            { (isNotEmailValid && formSubmitted) && (
                            <div className="alert alert-danger alert-dismissible fade show p-1" >
                                Please enter a valid email address.
                            </div>
                        )}
                        </div>
                
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                autoComplete="off"
                                id="password"
                                name="password"
                                className="form-control"
                                value={data.password}
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                            />
                            {  (!isPasswordValid  && formSubmitted && !isNotEmailValid )  &&(
                            <div className="alert alert-danger alert-dismissible fade show p-1" >
                                Invalid Password
                            </div>
                        )}
                            
                        </div>

                        <button type="submit" className="btn btn-success w-100 mb-3">
                            Log in
                        </button>
                    </form>
                    <p className="text-center">Don't have an account?</p> 
                    <Link to="/register" type="button" className="btn btn-outline-primary w-100">Sign up</Link>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        </div>

    );
}

export default Login;
