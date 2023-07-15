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
                            <Link to="/">
                                <Button color={"black"} variant={'solid'} colorScheme={'white'} size={'md'} mr={4}>
                                    Home
                                </Button>
                            </Link>

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
                            <Link to="/books">
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
                        <Link to="/cart">
                            <Button
                                variant={'solid'}
                                colorScheme={'teal'}
                                size={'md'}
                                mr={4}
                                leftIcon={<AiOutlineShoppingCart />}>
                                Cart
                            </Button>
                        </Link>

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
                                        'https://avatars.githubusercontent.com/u/103144321?v=4'
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
                            <Link to="/books">
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