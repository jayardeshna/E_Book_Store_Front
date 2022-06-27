import React,{useContext} from 'react'
import { logindata } from './context/ContextProvider';

const Home=()=>{
  const {ldata, setLdata} = useContext(logindata);
  return (
    <>
    {/* <h1>login success</h1> */}
      {
        ldata?
          <div>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Login SuccessFull!!</strong>    
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div> : ""
      }
    </>
  )
}

export default Home