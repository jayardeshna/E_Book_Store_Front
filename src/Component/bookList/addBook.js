import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBook = () => {

    const navigate = useNavigate();

    const [book, setBook] = useState({
        title: "",desc: "", img:"",  price: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setBook({ ...book, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { title, desc, img, price} = book;

        const responce = await fetch("http://localhost:7000/addbook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                title, desc, img, price

            })
        });

        //const data = await responce.json();
        console.log(responce.status)
        if (responce.status == 200 || responce.status == 201) {
            // setUdata(data);
            // setTimeout(() => {
            //     setUdata(null)
            // }, 3000);
            window.alert("Book Added Successfull");
            console.log("REGISTRATION successFULL");
            navigate('/');

        } else {

            window.alert("INVALID REGISTRATION");
            console.log("INVALID REGISTRATION");
        }
    }


    return (

        <div>
            <div className="container first col-3 my-5 d-flex">
                <h3 className='d-flex'>Add your Book</h3>
            </div>

            <div>
                <h4 className="container col-9">
                    Book Information
                </h4>
            </div>
            <form method="POST" encType="multipart/form-data">
                <div className="container px-4">
                    <div className="row gx-5 my-4">
                        <div className="col">
                            <div className="container input-group mb-3">
                                <input
                                    name="title"
                                    id="floatingInput"
                                    value={book.title}
                                    onChange={handleInputs}
                                    type="text" className="form-control container" placeholder="Title*" aria-label="Title*" />

                            </div>
                        </div>
                        <div className="col">
                            <div className="container input-group mb-3">
                                <input
                                    name="price"
                                    value={book.price}
                                    onChange={handleInputs}
                                    type="text" className="form-control container" placeholder="Price*" aria-label="Price*" />
                            </div>
                        </div>

                    </div>
                    {/* <div className="col">
                    <div className="container input-group mb-3">
                        <input
                            name="role"
                            value={user.role}
                            onChange={handleInputs}
                            type="text" className="form-control container" placeholder="role*" aria-label="role*" />
                    </div>
                </div> */}


                    <div className="row gx-5 my-4">
                        <div className="col">
                            <div className="container input-group mb-3 ">
                             <input
                                    name="description"
                                    value={book.description}
                                    onChange={handleInputs}
                                    type="Description" className="form-control" placeholder="Description"></input>

                            </div>
                        </div>
                    </div>
                  
                    <div className="row gx-5 my-4">
                        <div className="col">
                            <div className="container input-group ">
                                <div className="mb-5">
                                    <label for="formFileMultiple" className="form-label"><h6>Cover Of Your Book</h6></label>
                                    <input 
                                    className="form-control"
                                    name="image"
                                    type="file"
                                    //value={book.img}
                                    onChange={handleInputs}
                                    id="image" multiple />
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    

                </div>





                <div className="container my-3" >
                    <div className="container col-2">

                        <div className="container d-flex">
                            <button onClick={PostData} className="btn btn-outline-success me-2" type="submit">Add the book</button>

                        </div>

                    </div>
                </div>
            </form>

        </div>
    )
}

export default AddBook