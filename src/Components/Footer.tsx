import { Box, Divider, Flex, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    return (
        <Flex maxW={2300} direction="column">
            <Image
                src="LineFooter.svg"
                w={2300}
            />
            <Flex
                w="100%"
                h="100%"
                minH="678px"
                bg="#023535"
                alignItems="center"
                direction="column"
            >
                <SimpleGrid
                    columns={{ base: 1, lg: 4 }}
                    alignItems="center"
                    spacing={5}
                    textAlign={{ base: 'center', lg: 'left' }}
                    maxW={1200}
                    mt={10}
                    p={10}
                >

                    <Image
                        src="logoFooter.svg"
                        alt="logo sec"
                        mx={{ base: 'auto', lg: '0' }}


                    />

                    <Flex
                        direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
                        alignItems="center"
                        textAlign={{ md: 'center', lg: 'left' }}
                    >
                        <Image src="location.svg" mb={{ base: 2, md: 2, lg: 0 }} mr={{ lg: 2 }} />
                        <Text
                            whiteSpace="pre-line"
                            className={inter.className}
                            fontWeight={400}
                            fontSize="16px"
                            lineHeight="24px"
                            color="#FCFCFC"
                            cursor="default"

                        >
                            Avenida Cezira Giovani Moretti, 655,{'\n'}
                            Piracicaba, Sao Paulo 13.414-157, BR
                        </Text>
                    </Flex>

                    <Flex
                        direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
                        alignItems="center"
                        textAlign={{ md: 'center', lg: 'left' }}
                    >
                        <Image src="location.svg" mb={{ base: 2, md: 2, lg: 0 }} mr={{ lg: 2 }} />
                        <Text
                            className={inter.className}
                            fontWeight={400}
                            fontSize="16px"
                            lineHeight="24px"
                            color="#FCFCFC"
                            whiteSpace="pre-line"
                            cursor="default"
                        >
                            Rua Evangelino Meireles 570, Salas 01 e 02,{'\n'}
                            Anápolis, Goiás 75110-720, BR
                        </Text>
                    </Flex>

                    <Flex
                        order={{ base: -1, lg: 0 }}
                        justifyContent={{ base: 'center', lg: 'flex-end' }}
                        alignItems="center"
                        w="auto"
                        cursor="pointer"
                        onClick={scrollToTop} 
                    >
                        <Image
                            src="ButtonBack.svg"
                            alt="voltar imagem"
                            _hover={{ filter: "brightness(0) saturate(100%) invert(36%) sepia(60%) saturate(700%) hue-rotate(84deg) brightness(92%) contrast(101%)" }}
                        />
                    </Flex>
                </SimpleGrid>
                <Divider borderColor="#FFFFD4" w="80%" opacity={0.2} mt={8} mb={20} maxW={1221} />


                <Flex w="100%" justifyContent="center">

                    <SimpleGrid
                        columns={{ base: 1, sm: 1, md: 4, lg: 4 }}
                        spacing={{ base: 5, sm: 5, md: 5, lg: 120 }}
                        maxW="1200px"
                        w={{ base: 'auto', sm: 'auto', md: 'auto', lg: "100%" }}
                        mx="auto"
                        p={10}
                    >


                        <Box textAlign={{ base: 'center', sm: 'center', md: 'left', lg: 'left' }}>
                            <Flex justifyContent={{ base: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start' }} mb={3}>
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="18px"
                                    lineHeight="32px"
                                    color="#FFFFD4"
                                >
                                    Empresa
                                </Text>
                            </Flex>

                            <Flex direction="column" gap={2}>
                                <Text className={inter.className} fontSize="16px" lineHeight="24px" color="#FCFCFC" _hover={{ color: "#29e529" }} cursor="default">Sobre Nós</Text>
                                <Text className={inter.className} fontSize="16px" lineHeight="24px" color="#FCFCFC" _hover={{ color: "#29e529" }} cursor="default">Contato</Text>
                                <Text className={inter.className} fontSize="16px" lineHeight="24px" color="#FCFCFC" _hover={{ color: "#29e529" }} cursor="default">Parceria comercial</Text>
                                <Text className={inter.className} fontSize="16px" lineHeight="24px" color="#FCFCFC" _hover={{ color: "#29e529" }} cursor="default">Trabalhe conosco</Text>
                                <Text mb={{ base: 5, sm: 5, md: 0, lg: 0 }} className={inter.className} fontSize="16px" lineHeight="24px" color="#FCFCFC">Fale com a equipe</Text>
                            </Flex>
                        </Box>
                        <Box textAlign={{ base: 'center', sm: 'center', md: 'left', lg: 'left' }}>
                            <Flex justifyContent={{ base: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start' }} mb={3}>
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="18px"
                                    lineHeight="32px"
                                    color="#FFFFD4"
                                >
                                    Produtos
                                </Text>
                            </Flex>

                            <Flex direction="column" gap={2}>
                                <Text className={inter.className} fontSize="16px" lineHeight="24px" color="#FCFCFC" _hover={{ color: "#29e529" }} cursor="default">Z Club</Text>
                                <Text className={inter.className} fontSize="16px" lineHeight="24px" color="#FCFCFC" _hover={{ color: "#29e529" }} cursor="default">CX Corp</Text>
                                <Text className={inter.className} fontSize="16px" lineHeight="24px" color="#FCFCFC" _hover={{ color: "#29e529" }} cursor="default">Produto 3</Text>
                                <Text mb={{ base: 5, sm: 5, md: 0, lg: 0 }} className={inter.className} fontSize="16px" lineHeight="24px" color="#FCFCFC">Produto 4</Text>
                            </Flex>
                        </Box>
                        <Box textAlign={{ base: 'center', sm: 'center', md: 'left', lg: 'left' }}>
                            <Flex justifyContent={{ base: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start' }} mb={3}>
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="18px"
                                    lineHeight="32px"
                                    color="#FFFFD4"
                                >
                                    Redes Sociais
                                </Text>
                            </Flex>

                            <Flex direction="column" gap={2}>
                                <Text className={inter.className} fontSize="16px" lineHeight="24px" color="#FCFCFC" _hover={{ color: "#29e529" }} cursor="default">Linkedin</Text>
                                <Text className={inter.className} fontSize="16px" lineHeight="24px" color="#FCFCFC" _hover={{ color: "#29e529" }} cursor="default">Instagram</Text>
                                <Text mb={{ base: 5, sm: 5, md: 0, lg: 0 }} className={inter.className} fontSize="16px" lineHeight="24px" color="#FCFCFC">Facebook</Text>
                            </Flex>
                        </Box>
                        <Box textAlign={{ base: 'center', sm: 'center', md: 'left', lg: 'left' }}>
                            <Flex justifyContent={{ base: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start' }} mb={3}>
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="18px"
                                    lineHeight="32px"
                                    color="#FFFFD4"
                                >
                                    Contato
                                </Text>
                            </Flex>

                            <Flex direction="column" gap={2}>
                                <HStack >


                                    <Image src="WhatsIcon.svg"  display={{base: 'none', sm: 'none', md: 'flex'}}/>
                                    <Text _hover={{ color: "#29e529" }} cursor="default" mb={{ base: 5, sm: 5, md: 0, lg: 0 }} className={inter.className} fontSize="16px" lineHeight="24px" color="#FCFCFC">Fale com a equipe</Text>
                                </HStack>
                            </Flex>
                        </Box>
                    </SimpleGrid>
                </Flex>

                <Divider borderColor="#FFFFD4" w="full" opacity={0.2} mt={{ base: 10, sm: 10, md: 36 }} mb={6} />


                <Flex mb={6} mx={2} >

                    <Flex
                        direction={{ base: "column", md: "column", lg: "row" }}
                        alignItems="center"

                    >
                        <Flex
                            order={{ base: 2, lg: -1 }}
                            mt={{ base: 12, sm: 12, md: 12, lg: 0 }}
                        >

                            <Text
                                className={inter.className}
                                fontWeight={600}
                                fontSize="16px"
                                lineHeight="24px"
                                color="#FCFCFC"
                            >
                                © 2024 - AionZ. Todos os direitos reservados
                            </Text>
                        </Flex>

                        <Divider
                            ml={3}
                            mr={3}
                            borderColor="#FFFFD4"
                            h="60%"
                            opacity={0.2}
                            orientation="vertical"
                            display={{ base: "none", md: "none", lg: "inline-block" }}
                        />

                        <Text
                            className={inter.className}
                            fontWeight={500}
                            fontSize="16px"
                            lineHeight="24px"
                            color="#FCFCFC"
                            mt={{ base: 12, sm: 12, md: 12, lg: 0 }}
                            mb={{ base: 4, sm: 4, md: 4, lg: 0 }}
                        >
                            Termos de Uso
                        </Text>

                        <Divider
                            ml={3}
                            mr={3}
                            borderColor="#FFFFD4"
                            h="60%"
                            opacity={0.2}
                            orientation="vertical"
                            display={{ base: "none", md: "none", lg: "inline-block" }}
                        />

                        <Text
                            className={inter.className}
                            fontWeight={500}
                            fontSize="16px"
                            lineHeight="24px"
                            color="#FCFCFC"
                            mr={{base: 0, sm: 0 , md: 0, lg: 120}}
                        >
                            Políticas de Privacidade
                        </Text>
                        <Flex order={{ base: -1, lg: 0 }} >
                            <Image src="IconInstagram.svg" alt="Icon instagram" _hover={{ filter: "brightness(0) saturate(100%) invert(36%) sepia(60%) saturate(700%) hue-rotate(84deg) brightness(92%) contrast(101%)" }} />
                            <Image src="IconLinkedin.svg" alt="Icon linkedin" _hover={{ filter: "brightness(0) saturate(100%) invert(36%) sepia(60%) saturate(700%) hue-rotate(84deg) brightness(92%) contrast(101%)" }} />
                            <Image src="IconFacebook.svg" alt="Icon facebook" _hover={{ filter: "brightness(0) saturate(100%) invert(36%) sepia(60%) saturate(700%) hue-rotate(84deg) brightness(92%) contrast(101%)" }} />
                        </Flex>
                    </Flex>

                </Flex>
            </Flex>

        </Flex>
    );
}
