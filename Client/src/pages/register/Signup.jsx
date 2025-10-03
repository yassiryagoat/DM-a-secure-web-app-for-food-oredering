import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { StoreContext } from "../../context/StoreContext"; // Import StoreContext


function Signup() {
    const navigate = useNavigate();
    const [data, setData] = useState({ firstname: '', lastname: '', email: '', password: '' });
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false); 
    const [firstnameTouched, setIsFirstnameValid] = useState(false);
    const [lastnameTouched, setIsLastnameValid] = useState(false);

    //31/5
    const { setIsAuthenticated } = useContext(StoreContext); // Access setIsAuthenticated from context

    


    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

       //validate full name
       if (data.firstname.length < 3) {
        setIsFirstnameValid(false);
        } else {
            setIsFirstnameValid(true);
        }

        if (data.lastname.length < 3) {
            setIsLastnameValid(false);
        } else {
            setIsLastnameValid(true);
        }
       
       
       
       
       
        //validate email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail+\.com$/;
        if (!emailRegex.test(data.email)) {
            setIsEmailValid(false);
            return;
        } else {
            setIsEmailValid(true);
        }



        // Validate password
        if (!passwordRegex.test(data.password)) {
            setIsPasswordValid(false);
            return;
        } else {
            setIsPasswordValid(true);
        }

        // If password is valid, proceed with form submission
        axios.post('http://localhost:3001/register', {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password
        })
        .then(result => {
            console.log(result);
            if (result.data === 'Sign up Succeeded')setIsAuthenticated(true); navigate('/home');
        })
        .catch(err => console.log(err));
    };

    return (
        <section className="vh-50 gradient-custom bg-white">
      <div className="container py-2 h-50">
        <div className="row d-flex justify-content-center align-items-center h-50">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{borderRadius: "1rem" }}>
            <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">
                <h2 className="mb-4 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 d-flex">
                        <div className="w-50 ms-2">
                            <label htmlFor="Last name" className="form-label">
                                <strong>Last Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Last name"
                                autoComplete="off"
                                id="Lastname"
                                name="Lastname"
                                className="form-control"
                                value={data.lastname}
                                onChange={(e) => setData({...data, lastname: e.target.value})}
                            />
                            {  !firstnameTouched && (formSubmitted) && (
                            <div className="alert alert-danger alert-dismissible fade show p-1" >
                            Lastname is required
                                </div>
                            )}
                        </div>
                        <div className=" w-50 ms-2">
                            <label htmlFor="First name" className="form-label">
                                <strong>First Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter First name"
                                autoComplete="off"
                                id="Firstname"
                                name="Firstname"
                                className="form-control"
                                value={data.firstname}
                                onChange={(e) => setData({...data, firstname: e.target.value})}
                            />
                            { !lastnameTouched && (formSubmitted) && (
                            <div className="alert alert-danger alert-dismissible fade show p-1" >
                                    Firstname is required
                                </div>
                            )}
                        </div>
                    </div>
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
                            onChange={(e) => setData({...data, email: e.target.value})}
                        />
                        { (!isEmailValid && formSubmitted) && (
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
                            placeholder="(8+ characters including uppercase(s) and special character(s)"
                            autoComplete="off"
                            id="password"
                            name="password"
                            className="form-control"
                            value={data.password}
                            onChange={(e) => setData({...data, password: e.target.value})}
                        />
                        {  (!isPasswordValid  && formSubmitted )  &&(
                            <div className="alert alert-danger alert-dismissible fade show p-1" >
                                Invalid Password
                            </div>
                        )}
                    </div>
                    <button type="submit" className="btn btn-success w-100 mb-3">
                        Sign up
                    </button>
                </form>
                <p className="text-center">Already Have an Account?</p>
                <Link to="/Login" type="button" className="btn btn-outline-primary w-100">
                    Login
                </Link>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
    );
}

export default Signup;
