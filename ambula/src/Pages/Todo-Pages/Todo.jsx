import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, Button, useToast, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodos, getTodos } from '../../Redux/todo/todoaction';
import Edittodos from './Edittodos';
import AddTodo from './AddTodo';

const Todo = () => {
    // delete
    // 
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [addModalOpen, setAddModalOpen] = useState(false);

    const [editItemId, setEditItemId] = useState(""); // New state to store the item id
    const toast = useToast()
    const dispatch = useDispatch()
    const todo = useSelector((store) => store.todo)
    console.log(todo)


    useEffect(() => {
        if (todo.todos.length === 0) {
            dispatch(getTodos())
        }
    }, [dispatch, todo.todos])


    const deleteHandler = (id) => {
        dispatch(deleteTodos(id))
            .then(() => {
                dispatch(getTodos())
                toast({
                    title: 'Deleted Succesfully ',
                    description: "Succesfully Book Deleted",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: "top"
                })
            });

    }

    const openEditModal = (id) => {
        setEditItemId(id);
        setEditModalOpen(true);
    };


    const runningCount = todo.todos.filter((item) => item.status === 'Running').length;
    const doneCount = todo.todos.filter((item) => item.status === 'Done').length;
    const totalCount = todo.todos.length;
    console.log(runningCount, doneCount, totalCount)



    return (
        <div style={{ width: "100%", height: "800px", border: "1px solid red" }}>
            <Text mt="30px" fontSize={"30px"}> Todo</Text>

            <Box  width={["100%","100%","100%","90%"]} m="auto" mt="30px" h="auto" border="1px solid blue" display={"flex"} justifyContent={"flex-end"}>
                <Box w={["100%", "100%", "50%", "80%"]} h="auto" border="1px solid red" display="flex" justifyContent={["center", "flex-end", "space-between", "flex-end"]}>

                    <SimpleGrid padding="10px" columns={{ base: 2, sm: 2, md: 2, lg: 4}} gap="20px">
                    <Button colorScheme='green' onClick={() => setAddModalOpen(true)} >Add Todos</Button>
                        <Button colorScheme='green'>Total Todos : {totalCount}</Button>
                        <Button colorScheme='blue'  >Running Todo : {runningCount}</Button>
                        <Button colorScheme='purple'>Completed Todo : {doneCount}</Button>
                    </SimpleGrid>


                </Box>


            </Box>

            <Box overflowX="auto"  border="1px solid pink" width={["100%","100%","100%","90%"]} m="auto" mt="50px">
                <Table variant="unstyled" size='lg'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Title</Th>
                            <Th>Status</Th>
                            <Th>Edit</Th>

                        </Tr>
                    </Thead>
                    <Tbody>
                        {todo.todos.map((item) => (
                            <Tr key={item.id}>
                                <Td>{item.id}</Td>
                                <Td>{item.title}</Td>
                                <Td>
                                    <Button colorScheme='white' color="black">{item.status}</Button>
                                </Td>
                                <Td display="flex" >
                                    <button onClick={() => deleteHandler(item.id)}
                                    >
                                        <DeleteIcon w="30px" h="40px" color="red" />
                                    </button>
                                    <Box ml="20px">
                                        <button onClick={() => openEditModal(item.id)}>
                                            <EditIcon w="30px" h="40px" color="blue" />
                                        </button>
                                    </Box>




                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>

                <Edittodos

                    editModalOpen={editModalOpen}
                    setEditModalOpen={setEditModalOpen}
                    itemId={editItemId} // Pass the item id as a prop
                />

                <AddTodo
                 addModalOpen={addModalOpen}
                 setAddModalOpen={(e) => setAddModalOpen(e)}
                   
                />
            </Box>


        </div>
    )
}

export default Todo