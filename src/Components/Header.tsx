import { Box, Flex, HStack, Icon, Image, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { Inter } from 'next/font/google'
import { ArrowBackIcon, SearchIcon } from "@chakra-ui/icons";


const inter = Inter({ subsets: ["latin"] });

export function Header() {
    return (
        <Box
            bgColor="#FCFCF8"
            h="100px"
            w="100%"
            mx="auto"
            position="fixed"
            maxW={2300}
            alignItems="center"
            zIndex="1000"
            left="50%"
            transform="translateX(-50%)"
            boxShadow="0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(224, 227, 222, 0.5)"  // Adicionando sombra na parte inferior com a cor #E0E3DE

        >
            <HStack
                justifyContent="space-between" h="100%" alignItems="center" mx={{ base: 'none', sm: '30px', md: '100px', lg: '120px', xl: '230px' }}
            >
                <Flex>
                    <Icon as={ArrowBackIcon} boxSize={6} color="#005257" />
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
                <Flex>
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

                <InputGroup w="339px" h="56px" >
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

            </HStack>

        </Box>
    )
}