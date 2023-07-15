import React from 'react'
import { Route, Routes } from 'react-router-dom';

import AddTodo from '../Pages/Todo-Pages/AddTodo';
import Edittodos from '../Pages/Todo-Pages/Edittodos';
import Todo from "../Pages/Todo-Pages/Todo"
import Home from "../Pages/Home"
import Books from '../Pages/Books-Pages/Books';
import CartPage from '../Pages/Books-Pages/CartPage';
import Movies from '../Pages/Movies';


const AllRoutes = () => {
  return (
    <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo/>} />
            <Route path="/books" element={<Books />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/movies" element={<Movies />} />

        </Routes>
    </div>
  )
}

export default AllRoutes