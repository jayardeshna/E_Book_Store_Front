import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { adddata } from './context/ContextProvider';
import { logindata } from './context/ContextProvider';
import { Form, Field, ErrorMessage, useFormik, yupToFormErrors, Formik } from 'formik';
import * as Yup from 'yup'

const Login = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const { udata, setUdata } = useContext(adddata);
  const { ldata, setLdata } = useContext(logindata);
  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     password: ''
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string().email('inValid Email Address').required('required'),
  //     password: Yup.string().min(6, 'minimum length of password is 6').required
  //   }),

  //   onSubmit: async (value) => {
  //     const responce = await fetch('http://localhost:7000/login', {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: value
  //     });

  //     const data = await responce.json();

  //     if (responce.status == 200 || responce.status == 201) {
  //       setLdata(data)
  //       setTimeout(() => {
  //         setLdata(null)
  //       }, 3000);
  //       // window.alert("CONGRATS...Login SUCCESSFULL");
  //       console.log("login successFULL");

  //       navigate('/');

  //     } else {
  //       window.alert("invalid email or password");
  //       console.log("invalid email or password");
  //     }
  //   }
  // });

  const loginUser = async (values) => {

    const responce = await fetch('http://localhost:7000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });

    const data = await responce.json();

    if (responce.status == 200 || responce.status == 201) {
      setLdata(data)
      setTimeout(() => {
        setLdata(null)
      }, 3000);
      
      console.log("login successFULL");

      navigate('/');

    } else {
      window.alert("invalid email or password");
      console.log("invalid email or password");
    }
  }
  return (

    <div>

      {
        udata ?
          <div>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Registration SuccessFull!</strong>  Please Login
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div> : ""
      }
      <div className="container first col-5 my-5">
        <h3 className='md-2'>Login or Create an Account</h3>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="container my-2">New Customer</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item col-5">Registration is free and Easy</li>
              <li className="list-group-item col-5">Faster Checkout</li>
              <li className="list-group-item col-5">Save multiple shipping address</li>
              <li className="list-group-item col-5">View and Track orders ans more</li>
            </ul>
            <NavLink to="/Registration"><button type="button" className="btn btn-primary btn-lg my-5">Create an Account</button></NavLink>

          </div>

          <div className="col">
            <h4 className="container"> Registered Account</h4>
            <p>If you have an Account with us, Please log in</p>
              <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}
                validationSchema={Yup.object({
                  email: Yup.string().email('inValid Email Address').required('required'),
                  password: Yup.string().min(6, 'minimum length of password is 6').required('required')
                })}
                onSubmit={(values) => loginUser(values)}
              >
                <Form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address*</label>
                  <Field name='email' type='email' placeholder="your email" className="form-control" aria-describedby="emailHelp"/>
                  <div style={{color:"red"}}>
                  <ErrorMessage name='email' />
                  </div>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password*</label>
                  <Field name='password' type='password' placeholder="Enter your Password" className="form-control"/>
                  <div style={{color:"red"}}>
                  <ErrorMessage name='password'/>
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
                </Form>
              </Formik>
          </div>
        </div>
      </div>

    </div >
  )

}

export default Login

