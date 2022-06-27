import React, { useEffect, useState, useContext  } from 'react'
import { Link, Navigate, NavLink } from "react-router-dom";

const Category = () => {

    const callCategorypage=async()=>{
        try {
          const res=await fetch('/Category',{
            method:'GET',
            headers:{
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            credentials:"include"
          });
  
          const data= await res.json();
          console.log(data);
  
          if (!res.status == 200 || !res.status == 201) {
             const error=new Error(res.error);
             throw error;
          } 
          
        } catch (error) {
          console.log(error);
          Navigate('/login');
        }
    }

    useEffect(()=>{
        callCategorypage();
     },[]);
  return (
    <>
        <h1>Category</h1>
    </>
  )
}

export default Category