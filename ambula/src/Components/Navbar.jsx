import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,

    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';



export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box fontSize={"18px"}>
                            <Button color={"black"} variant={'solid'} colorScheme={'white'} size={'md'} mr={4}>
                                  Home
                            </Button>
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>

                            <Link to="/todo">
                                <Button variant={'solid'} colorScheme='messenger' size={'md'} mr={4}>
                                    Todo
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button variant={'solid'} colorScheme='messenger' size={'md'} mr={4}>
                                    Product
                                </Button>
                            </Link>

                            <Link to="/">
                                <Button variant={'solid'} colorScheme='messenger' size={'md'} mr={4}>
                                    fetch Data
                                </Button>
                            </Link>




                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button
                            variant={'solid'}
                            colorScheme={'teal'}
                            size={'md'}
                            mr={4}
                            leftIcon={<AiOutlineShoppingCart />}>
                            Cart
                        </Button>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'md'}
                                    src={
                                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>


                            <Link to="/todo">
                                Todo
                            </Link>
                            <Link to="/">
                                Product
                            </Link>
                            <Link to="/">
                                Fetch Data
                            </Link>
                        </Stack>
                    </Box>
                ) : null}
            </Box>


        </>
    );
}