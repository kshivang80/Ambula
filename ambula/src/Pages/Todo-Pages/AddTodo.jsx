import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  SimpleGrid,
  Input,
  Select,
  FormLabel,
  FormControl,
  useToast,
  Toast
} from "@chakra-ui/react";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSingleTodos, getTodos, postTodos, updateTodos } from "../../Redux/todo/todoaction";

const initialState = {
  title: "",
  status: "" || "Running",


}

const AddTodo = ({ addModalOpen,setAddModalOpen,}) => {
  const toast = useToast()
  const [text, setText] = useState(initialState)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const todo = useSelector((store) => store.todo)

  const { title, status } = text



  const handelChange = (e) => {
    const { name, value } = e.target;

    setText({ ...text, [name]: value });
};

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!title || !status) {
        alert("Please Fill All Input filled")
    } else {
        try {
            await dispatch(postTodos(text));
            toast({
                title: 'Todos Added !',
                description: "Added Todo Data Successfully",
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: "top"
            });
            setText("")
            setAddModalOpen(false); // Close the modal
            dispatch(getTodos())
           

        } catch (error) {
            console.error(error);
            toast({
                title: 'Error',
                description: "An error occurred while added",
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: "top"
            });
        }
    }

};



  return (
    <>
    <Modal
        blockScrollOnMount={false}
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
    >
        <ModalOverlay backdropFilter={"blur(10px)"} />
        <ModalContent>
            <ModalHeader>Add Todos </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <form onSubmit={handelSubmit}>
                    <FormControl id="title">
                        <FormLabel>Title</FormLabel>
                        <Input
                            type='text'
                            id="title"
                            name="title"
                            value={title}
                            onChange={handelChange}
                        />
                    </FormControl>

                    <FormControl id="status">
                        <FormLabel>Status</FormLabel>
                        <Select
                            id="status"
                            name="status"
                            value={status}
                            onChange={handelChange}
                        >  
                          <option value="">Select Status</option> 
                            <option value="Running">Running</option>
                            <option value="Done">Done</option>
                        </Select>
                    </FormControl>

                    <Button
                       mt={'20px'}
                        type='submit'
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Add Data
                    </Button>
                </form>
            </ModalBody>

            <ModalFooter>

            </ModalFooter>
        </ModalContent>
    </Modal>
</>
  )
}

export default AddTodo