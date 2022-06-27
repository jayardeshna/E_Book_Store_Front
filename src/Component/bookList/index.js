import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { productListingStyle } from "./style";
import { materialCommonStyles } from "../../utils/materialCommonStyles";
import { addProduct } from "../../Redux/cartRedux";
import { useDispatch } from "react-redux";
import Box from "@material-ui/core/Box";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import prodcutImage from "../../assets/images/levis.png";
import { defaultFilter, StatusCode } from "../../utils/constant";
// import bookService from "../../service/book/book.service";
import { Navigate } from "react-router-dom";


const BookList = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [book, setBook] = useState({});
   const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [getbookdata, setBookdata] = useState([]);
   const classes = productListingStyle();
   const materialClasses = materialCommonStyles();
  
  const getData = async (e) => {
  

    const responce = await fetch("/getBook", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(responce)

    const data = await responce.json();
    console.log(data)


    if (responce.status == 200 || responce.status == 201) {
      setBookdata(data)
    } else {
      console.log("error occur");
    }
  }

  useEffect(() => {
    getData();
  }, [])

  


  
  // const handleQuantity = (type) => {
  //   if (type === "dec") {
  //     quantity > 1 && setQuantity(quantity - 1);
  //   } else {
  //     setQuantity(quantity + 1);
  //   }
  // };


  const handleClick = (id) => {
    const getBook = async () => {
      try {
        const res = await axios.get(`http://localhost:7000/getBook/${id}`);
        setBook(res.data);
      } catch {}
    };
    getBook();
    dispatch(     
      addProduct({type:'addBook',payload:book
    })
    );
   
  };

  return (
    <>
      <div className={classes.productListWrapper}>
        <div className="container">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            
          >
            <Typography variant="h4">Book Listing</Typography>  </Box>
            
            <div className="title-wrapper">
            </div>
            <div className="product-list-wrapper">
              <div className="product-list-inner-wrapper">
                {getbookdata?.map((book, id) => (
                  <div className="product-list" key={id}>
                    <div className="product-list-inner">
                      <em>
                        <img src={book.img} alt={book.title} />
                      </em>
                      <div className="content-wrapper">
                        <Typography variant="h3">{book.title}</Typography>
                        <p className="description">{book.description}</p>
                        <p className="price">
                          <span className="discount-price">MRP {book.price}</span>
                          &#8377; {book.price}
                        </p>
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn pink-btn MuiButton-containedPrimary MuiButton-disableElevation">
                          <span className="MuiButton-label"  onClick={handleClick(id)}>ADD TO CART</span>
                          <span className="MuiTouchRipple-root"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>

      </div>



    </>
  )

};

export default BookList;