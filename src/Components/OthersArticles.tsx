import { Box, Button, Flex, HStack, Icon, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export function OthersArticles() {
    return (
        <Flex mt={100} maxW={1700} w="100%" direction="column" alignItems="center"  >
            <Flex w="100%" justifyContent="start" >
                <Text
                    className={inter.className}
                    fontWeight={700}
                    fontSize="28px"
                    lineHeight="40px"
                    color="#005257"
                    ml={{ base: 5, sm: 20, md: "5%", lg: "10%", xl: "10%" }}
                >
                    Outros artigos
                </Text>
            </Flex>

            <SimpleGrid
                columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
                spacing={30}
                mt={30}
            >
                <Box
                    w={{ base: "333px", sm: "333px", md: "340px", lg: "300px", xl: "370px" }}
                    h={{ base: "473px", sm: "473px", md: "490px" }}
                    borderRadius="32px"
                    bg="#FCFCF8"
                    borderWidth={1}
                    borderColor="#C5CAC5"
                >
                    <Image
                        src="ImageTest.svg"
                        alt="Imagem Test"
                        borderTopRadius="32px"
                    />

                    <HStack justifyContent="space-between" mt={4} mx={5} >
                        <Text
                            className={inter.className}
                            noOfLines={1}
                            fontWeight={400}
                            fontSize="18px"
                            lineHeight="32px"
                            color="#404541"
                        >10 de Abril de 2024 </Text>

                        <Flex>
                            <Image
                                src="heart.svg"
                                w="24px"
                                h="24px"
                            />
                            <Text
                                className={inter.className}
                                noOfLines={1}
                                fontWeight={400}
                                fontSize="14px"
                                lineHeight="22px"
                                color="#191B18"
                            >50</Text>
                        </Flex>
                    </HStack>

                    <VStack mx={5}>
                        <Text
                            className={inter.className}
                            noOfLines={3}
                            fontWeight={700}
                            mt={2}
                            fontSize="18px"
                            lineHeight="28px"
                            color="#023535"
                        >
                            Melhora contínua de processos no controle agrícolas, Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam suscipit cupiditate vitae doloremque adipisci corrupti ut ipsa eaque? Fuga tenetur cumque nesciunt aut quasi quidem eos dolore, quo recusandae!
                        </Text>

                        <Text
                            className={inter.className}
                            noOfLines={3}
                            fontWeight={400}
                            fontSize="16px"
                            lineHeight="24px"
                            color="#404541"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora non obcaecati hic corporis accusantium porro nulla nostrum beatae cum nesciunt ipsa, quisquam aliquam facilis vel officia, dolores illo voluptatem soluta.
                        </Text>

                        <Button
                            mt={{ base: 'none', sm: 2, md: 4, lg: 0 }}
                        >Leia mais</Button>
                    </VStack>
                </Box>

                <Box
                    w={{ base: "333px", sm: "333px", md: "340px", lg: "300px", xl: "370px" }}
                    h={{ base: "473px", sm: "473px", md: "473px" }}
                    borderRadius="32px"
                    bg="red"
                />

                <Box
                    w={{ base: "333px", sm: "333px", md: "340px", lg: "300px", xl: "370px" }}
                    h={{ base: "473px", sm: "473px", md: "473px" }}
                    borderRadius="32px"
                    bg="red"
                />

                <Box
                    w={{ base: "333px", sm: "333px", md: "340px", lg: "300px", xl: "370px" }}
                    h={{ base: "473px", sm: "473px", md: "473px" }}
                    borderRadius="32px"
                    bg="red"
                />


            </SimpleGrid>
        </Flex>
    );
}
