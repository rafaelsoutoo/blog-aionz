import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Icon, IconButton, Image, Input, InputGroup, InputRightElement, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { Inter } from 'next/font/google'
import { ArrowBackIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { SideBar } from "./SideBar";


const inter = Inter({ subsets: ["latin"] });

export function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isMobile = useBreakpointValue({
        base: true,
        sm: true,
        md: false,
        lg: false,
        xl: false
    });

    return (
        <Box
            bgColor="#FCFCF8"
            h={{ base: '56px', sm: '56px', md: '100px' }}
            w="100%"
            mx="auto"
            position="fixed"
            maxW={2300}
            alignItems="center"
            zIndex="1000"
            left="50%"
            transform="translateX(-50%)"
            boxShadow="0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(224, 227, 222, 0.5)" 

        >
            <HStack
                justifyContent="space-between" h="100%" alignItems="center" mx={{ base: 'none', sm: 'none', md: '100px', lg: '120px', xl: '230px' }}
            >
                {!isMobile && (
                    <Flex
                        cursor="pointer"
                        transition="transform 0.3s ease"
                        _hover={{
                            transform: "scale(1.1)", 
                        }}
                    >
                        <Icon
                            as={ArrowBackIcon}
                            boxSize={6}
                            color="#005257"

                        />
                        <Text
                            className={inter.className}
                            fontSize="16px"
                            lineHeight="24px"
                            fontWeight="500"
                            color="#005257"
                            ml="18px"

                        >
                            Voltar para o site
                        </Text>
                    </Flex>
                )}

                <Flex
                    alignItems="center"
                    justifyContent={{ base: 'center', sm: 'center', md: 'flex-start' }}
                    mx={{ base: 'auto', sm: 'auto', md: 'none' }}
                    cursor="pointer"
                    onClick={() => window.location.reload()}>
                    <Text
                        className={inter.className}
                        alignContent="center"
                        fontSize="24px"
                        fontWeight="400"
                        lineHeight="32px"
                    >Blog da</Text>
                    <Image
                        src="logoAionz.svg"
                        alt="Imagem logo"
                        objectFit="cover"
                        w="115.47px"
                        h="29.88px"
                    />
                </Flex>

                {!isMobile && (
                    <InputGroup
                        w="339px"
                        h="56px"
                    >
                        <Input
                            className={inter.className}
                            h="100%"
                            borderRadius="40px"
                            placeholder="O que está procurando?"
                            _placeholder={{
                                fontWeight: "500",
                                fontSize: "16px",
                                lineHeight: "24px",
                                color: "#585F58"
                            }}
                            focusBorderColor="rgba(0, 82, 87, 0.4)"

                            border="1px solid"
                            borderColor="rgba(0, 82, 87, 0.2)"
                            pl="24px"
                        />
                        <InputRightElement
                            pointerEvents="none"
                            children={<Icon as={SearchIcon} color="#023535" w="28px" h="28px" />}
                            h="100%"
                            mr="16px"
                        />
                    </InputGroup>
                )}


                {isMobile && (
                    <IconButton
                        icon={<Icon as={HamburgerIcon} />}
                        onClick={onOpen}
                        variant="unstyled"
                        mb={3}
                        color="#005257"
                        mr={2}
                        fontSize={32}
                        aria-label="Abrir menu"
                    />
                )}

            </HStack>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerHeader>
                        <DrawerCloseButton size="lg" mt="20px" mr="10px" />
                    </DrawerHeader>
                    <DrawerBody mt="10px">
                        <SideBar />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </Box>
    )
}