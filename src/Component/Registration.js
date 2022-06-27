import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { adddata } from './context/ContextProvider'
const Registration = () => {
    const navigate = useNavigate();
    const [pass, setPass] = useState("");
    const { udata, setUdata } = useContext(adddata);
    const [user, setUser] = useState({
        firstname: "", lastname: "", role: "", email: "", password: "", cpassword: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { firstname, lastname, role, email, password, cpassword } = user;

        const responce = await fetch("http://localhost:7000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                firstname, lastname, role, email, password, cpassword

            })
        });
        //console.log(responce)
        //   if(password >=5){
        //       window.alert("Password should be atleast 5 character");
        //   }
        const data = await responce.json();
       
        console.log(responce.status)
        if (responce.status == 200 || responce.status == 201) {
            setUdata(data);
            setTimeout(() => {
                setUdata(null)
            }, 3000);
            // window.alert("CONGRATS...REGISTRATION SUCCESSFULL");
            console.log("REGISTRATION successFULL");
            navigate('/Login');

        }

        
        
        else {

            window.alert("INVALID REGISTRATION");
            console.log("INVALID REGISTRATION");
        }
    }

    return (
        <div>
            <div className="container first col-3 my-5 d-flex">
                <h3 className='d-flex'>Login or Create an Account</h3>
            </div>

            <div>
                <h4 className="container col-9">
                    Personal Information
                </h4>
            </div>
            <form method="POST">
                <div className="container px-4">
                    <div className="row gx-5 my-4">
                        <div className="col">
                            <div className="container input-group mb-3">
                                <input
                                    name="firstname"
                                    id="floatingInput"
                                    value={user.firstname}
                                    onChange={handleInputs}
                                    type="text" className="form-control container" placeholder="First Name*" aria-label="First Name*" />

                            </div>
                        </div>
                        <div className="col">
                            <div className="container input-group mb-3">
                                <input
                                    name="lastname"
                                    value={user.lastname}
                                    onChange={handleInputs}
                                    type="text" className="form-control container" placeholder="Last Name*" aria-label="Last Name*" />
                            </div>
                        </div>

                    </div>
                  


                    <div className="row gx-5 my-4">
                        <div className="col">
                            <div className="container input-group mb-3">


                                <input
                                    name="role"
                                    value={user.role}
                                    onChange={handleInputs}
                                    type="text" className="form-control" placeholder="Role"></input>

                            </div>
                        </div>
                    </div>

                    <div className="row gx-5 my-4">
                        <div className="col">
                            <div className="container input-group mb-3">


                                <input
                                    name="email"
                                    value={user.email}
                                    onChange={handleInputs}
                                    type="email" className="form-control" placeholder="E-mail"></input>

                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="container my-5 col-9">
                        Login Information
                    </h4>
                </div>

                <div className="container px-4">
                    <div className="row gx-5 my-4">
                        <div className="col">
                            <div className="container input-group mb-3">

                                <input
                                    name="password"
                                    value={user.password}
                                    onChange={handleInputs}
                                    type="password" className="form-control container" placeholder="Password*" aria-label="Password*" />
                                      {/* {pass.length > 6 ? <p>Password is ok</p> : <p>Too short</p>} */}
                            </div>
                        </div>
                        <div className="col">
                            <div className="container input-group mb-3">
                                <input
                                    name="cpassword"
                                    value={user.cpassword}
                                    onChange={handleInputs}
                                    type="cpassword" className="form-control container" placeholder="Confirm Password" aria-label="Confirm-Password" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container my-3" >
                    <div className="container col-2">

                        <div className="container d-flex">
                            <button onClick={PostData} className="btn btn-outline-success me-2" type="submit">Submit</button>
                            <button className="btn btn-outline-primary" type="reset">Reset</button>
                        </div>

                    </div>
                </div>
            </form>

        </div>

    )
}

export default Registration