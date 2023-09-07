import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import remove from "../assets/x-button.png";
import empty from "../assets/empty-folder.png";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleAdd = (e) => {
        if (inputValue.trim() !== "") {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    };

    const handleDelete = (index) => {
        const deleteTodo = todos.filter((e, i) => i !== index);
        setTodos(deleteTodo);
    };

    return (
        <Box w={{ base: "90%", md: "60%", lg: "35%" }} m="auto" mt="10">
            <Text
                fontSize={{ base: "30px", md: "35px" }}
                fontWeight="bold"
                textAlign="center"
            >
                Todo List
            </Text>
            <Flex mt="10">
                <Input
                    type="text"
                    placeholder="Enter a todo"
                    border="1px solid #444444"
                    size={{ base: "md", md: "lg" }}
                    fontSize="16px"
                    borderRightRadius="none"
                    borderRight="none"
                    _hover={{ border: "1px solid #444444" }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button
                    onClick={handleAdd}
                    fontWeight="normal"
                    size={{ base: "md", md: "lg" }}
                    fontSize="16px"
                    borderLeftRadius="none"
                    colorScheme="teal"
                >
                    Add +
                </Button>
            </Flex>

            <Box mt="12">
                {todos.length === 0 ? (
                    <Flex alignItems="center" gap="3" justifyContent="center">
                        <Text fontSize="20px">No tasks added yet!</Text>
                        <Image w="12" src={empty} alt="empty" loading="lazy" />
                    </Flex>
                ) : (
                    todos.map((task, index) => (
                        <Flex
                            p="3"
                            mt="4"
                            key={index}
                            alignItems="center"
                            justifyContent="space-between"
                            border="1px solid #cecece"
                            borderRadius="6"
                        >
                            <Text>{task}</Text>
                            <Image
                                onClick={() => handleDelete(index)}
                                cursor="pointer"
                                w="8"
                                src={remove}
                                alt="delete"
                                loading="lazy"
                            />
                        </Flex>
                    ))
                )}
            </Box>
        </Box>
    );
};

export default Todo;
