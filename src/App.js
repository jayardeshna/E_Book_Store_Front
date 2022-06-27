import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from "./Component/Login";
import Registration from "./Component/Registration"
import UserEdit from './Component/user/UserEdit';
import Home from './Component/Home';
import { Footer } from './Component/footer/footer';
import {Header} from './Component/Header/Header'
import User from './Component/user/User';
import Category from './Component/Category';
import BookList from './Component/bookList';
import AddBook from './Component/bookList/addBook';
import Cart from './Component/Cart/Cart';
import Book from './Component/book/index'
const App=()=> {
  return (
   <>
      <Header />
     <Routes>
        
        <Route path="/" element={<BookList/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/login" element={ <Login/> } />
        <Route path="/Registration" element={ <Registration/> } />
        <Route path="/User" element={ <User/> } />
        <Route path="User/UserEdit/:id" element={ <UserEdit/> } />
        <Route path="/Category" element={ <Category /> } />
        <Route path="/addBook" element={ <AddBook /> } />
        <Route path="/Cart" element={ <Cart /> } />
      </Routes>
      <Footer />
   </>
  )
}

export default App