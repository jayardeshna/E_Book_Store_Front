import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { update } from '../context/ContextProvider';
const UserEdit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);
    const {updata, setUPdata}=useContext(update)
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstname: "", lastname: "",email: "",role: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const { id } = useParams("");
    console.log(id);

    const getData = async (e) => {


        const responce = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        const data = await responce.json();
        console.log(data)
        if (responce.status == 200 || responce.status == 201) {
            setUser(data)
            
            // console.log(data)
            

        } else {

            console.log("INVALID REGISTRATION");
        }
    }

    useEffect(() => {
        getData();
    }, [])


    const updateuser = async (e) =>{
        e.preventDefault();

        const { firstname, lastname, email, role}= user;

        const res = await fetch(`/updateuser/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstname, lastname, email, role
            })
        });

        const data2 = await res.json();
        console.log(data2);

        if (res.status == 200 || res.status == 201) {
            // window.alert("Data updated Successfully")
             console.log(data2)
            setUPdata(data2)
            setTimeout(()=>{
                setUPdata(null)
              },3000);
             navigate('/User');

        } else {
            window.alert("Fill the Fields")
            console.log("INVALID REGISTRATION");
        }
    
    }

    return (
        <div>
            <form method="PATCH">
                <div class="container px-4">
                    <div class="row gx-5 my-4">
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text"
                                    name="firstname"
                                    value={user.firstname}
                                    onChange={handleInputs}
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="First Name" />
                                <label for="floatingInput"><h5>First Name</h5></label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text"
                                    name="lastname"
                                    value={user.lastname}
                                    onChange={handleInputs}
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="larst Name" />
                                <label for="floatingInput"><h5>last Name</h5></label>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container px-4">
                    <div class="row gx-5 my-4">
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleInputs}
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="Email" />
                                <label for="floatingInput"><h5>Email</h5></label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text"
                                    name="role"
                                    value={user.role}
                                    onChange={handleInputs}
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="Role" />
                                <label for="floatingInput"><h5>Role</h5></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-3" >
                    <div className="container col-2">

                        <div className="container  d-flex">
                            <button onClick={updateuser} className="btn btn-outline-success me-2" type="submit">Save</button>
                            <button className="btn btn-outline-danger" type="cancel">Cancel</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserEdit