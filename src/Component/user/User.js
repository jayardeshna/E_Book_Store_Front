import React, { useEffect, useState, useContext  } from 'react'
import { Link, Navigate, NavLink } from "react-router-dom";
import {deldata} from '../context/ContextProvider';
import { update } from '../context/ContextProvider';

const User = () => {

  // const callUserpage=async()=>{
  //     try {
  //       const res=await fetch('/getData',{
  //         method:'GET',
  //         headers:{
  //           Accept: "application/json",
  //           "Content-Type": "application/json"
  //         },
  //         credentials:"include"
  //       });

  //       const data= await res.json();
  //       console.log(data);

  //       if (!res.status == 200 || !res.status == 201) {
  //          const error=new Error(res.error);
  //          throw error;
  //       } 
        
  //     } catch (error) {
  //       console.log(error);
  //       Navigate('/login');
  //     }
  // }

  // useEffect(()=>{
  //    callUserpage();
  // },[]);

  const [getuserdata, setUserdata] = useState([]);
  const {dltdata, setDLTdata}=useContext(deldata);
  const {updata, setUPdata}=useContext(update)
  const getData = async (e) => {


    const responce = await fetch("http://localhost:7000/getData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    //console.log(responce)

    const data = await responce.json();
    console.log(responce)


    if (responce.status == 200 || responce.status == 201) {
      setUserdata(data)
    } else {
      console.log("INVALID REGISTRATION");
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const deleteuser = async (id) => {
    const responce2 = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const deleteData = await responce2.json();
    console.log(deleteData);

    if (responce2.status == 200 || responce2.status == 201) {
      console.log(deleteData);
      getData();
      setDLTdata(deleteData);
      setTimeout(() => {
        setDLTdata(null)
      }, 3000);
    } else {
      console.log("INVALID REGISTRATION");
    }

  }

  return (
    <>
      {
        updata?
          <div>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Success!</strong>    User Updated!!! 
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div> : ""
      }


      {
        dltdata ?
          <div>
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Success!</strong>    User Deleted!!!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div> : ""
      }

      <div className="container first col-3 my-3">
        <div className="ms-5 d-flex"><h1> User List </h1></div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search user..." aria-label="Search" />

            </form>
          </div>
        </nav>
      </div>
      <div className="container ">
        <table className=" container table table-hover">

          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">email</th>
              <th scope="col">Role</th>


            </tr>
          </thead>
          <tbody>


            {
              getuserdata.map((element, id) => {
                return (
                  <>
                    <tr key={id}>
                      <th scope="row">{id + 1}</th>
                      <td>{element.firstname}</td>
                      <td>{element.lastname}</td>
                      <td>{element.email}</td>
                      <td>{element.role}</td>
                      <td><Link to={`UserEdit/${element._id}`}><button className="btn btn-outline-success me-2" type="submit">Edit</button></Link>
                        <button onClick={() => deleteuser(element._id)} className="btn btn-outline-danger" type="submit">Delete</button></td>
                    </tr>
                  </>
                )
              })
            }

          </tbody>
        </table>
      </div>

      <nav aria-label="..." className="container col-3">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>

    </>
  )
}

export default User