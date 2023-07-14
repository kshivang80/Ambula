import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Todo from '../Pages/Todo';
import AddTodo from '../Pages/AddTodo';
import Edittodos from '../Pages/Edittodos';
import Home from '../Pages/Home';


const AllRoutes = () => {
  return (
    <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/addtodo" element={<AddTodo />} />
            <Route path='/edittodo/:id' element={<Edittodos/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes