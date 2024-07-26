import { Box, Button, Center, Flex, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function Recommended() {
    return (
        <Flex mt={100} maxW={2300} w="100%">
            <Box
                position="relative"
                //h="362px"
                h={{ base: "500px", sm: "400px", md: "362px", lg: "362px" }}
                w="100%"
                bg="#023535"
            >
                <Image
                    src="recon.jpg"
                    opacity="0.5"
                    mixBlendMode="multiply"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                />

                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    w="100%"
                    h="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="flex-start"
                    mt={{base:"30px", sm: "45px", md: "62px", lg: "62px"}}
                >
                    <VStack>

                        <Text
                            className={inter.className}
                            fontWeight={700}
                            fontSize={{ base: "22px", sm: "28px" }}
                            lineHeight="16px"
                            color="#FFFFD4"
                        >
                            Tópicos recomendados
                        </Text>
                        <SimpleGrid
                            mt="30px"
                            columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 5 }}
                            gap="16px"
                            justifyContent="center"
                        >
                            <Button
                                borderRadius="24px"
                                w={{ base: "120px", sm: "140px", md: "166px" }}
                                h="40px"
                                bg="rgba(255, 255, 212, 0.1)"
                                padding="4px 16px"
                                _hover={{
                                    bg: "rgba(255, 255, 212, 0.200)",
                                }}
                            >
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="16px"
                                    lineHeight="24px"
                                    color="#FFFFD4"
                                    noOfLines={1}
                                >
                                    #Topicos
                                </Text>
                            </Button>
                            <Button
                                borderRadius="24px"
                                w={{ base: "120px", sm: "140px", md: "166px" }}
                                h="40px"
                                bg="rgba(255, 255, 212, 0.1)"
                                padding="4px 16px"
                                _hover={{
                                    bg: "rgba(255, 255, 212, 0.200)",
                                }}
                            >
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="16px"
                                    lineHeight="24px"
                                    color="#FFFFD4"
                                    noOfLines={1}
                                >
                                    #Topicos
                                </Text>
                            </Button>
                            <Button
                                borderRadius="24px"
                                w={{ base: "120px", sm: "140px", md: "166px" }}
                                h="40px"
                                bg="rgba(255, 255, 212, 0.1)"
                                padding="4px 16px"
                                _hover={{
                                    bg: "rgba(255, 255, 212, 0.200)",
                                }}
                            >
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="16px"
                                    lineHeight="24px"
                                    color="#FFFFD4"
                                    noOfLines={1}
                                >
                                    #Topicos
                                </Text>
                            </Button>
                            <Button
                                borderRadius="24px"
                                w={{ base: "120px", sm: "140px", md: "166px" }}
                                h="40px"
                                bg="rgba(255, 255, 212, 0.1)"
                                padding="4px 16px"
                                _hover={{
                                    bg: "rgba(255, 255, 212, 0.200)",
                                }}
                            >
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="16px"
                                    lineHeight="24px"
                                    color="#FFFFD4"
                                    noOfLines={1}
                                >
                                    #Topicos
                                </Text>
                            </Button>
                            <Button
                                borderRadius="24px"
                                w={{ base: "120px", sm: "140px", md: "166px" }}
                                h="40px"
                                bg="rgba(255, 255, 212, 0.1)"
                                padding="4px 16px"
                                _hover={{
                                    bg: "rgba(255, 255, 212, 0.200)",
                                }}
                            >
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="16px"
                                    lineHeight="24px"
                                    color="#FFFFD4"
                                    noOfLines={1}
                                >
                                    #Topicos
                                </Text>
                            </Button>
                            <Button
                                borderRadius="24px"
                                w={{ base: "120px", sm: "140px", md: "166px" }}
                                h="40px"
                                bg="rgba(255, 255, 212, 0.1)"
                                padding="4px 16px"
                                _hover={{
                                    bg: "rgba(255, 255, 212, 0.200)",
                                }}
                            >
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="16px"
                                    lineHeight="24px"
                                    color="#FFFFD4"
                                    noOfLines={1}
                                >
                                    #Topicos
                                </Text>
                            </Button>
                            <Button
                                borderRadius="24px"
                                w={{ base: "120px", sm: "140px", md: "166px" }}
                                h="40px"
                                bg="rgba(255, 255, 212, 0.1)"
                                padding="4px 16px"
                                _hover={{
                                    bg: "rgba(255, 255, 212, 0.200)",
                                }}
                            >
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="16px"
                                    lineHeight="24px"
                                    color="#FFFFD4"
                                    noOfLines={1}
                                >
                                    #Topicos
                                </Text>
                            </Button>
                            <Button
                                borderRadius="24px"
                                w={{ base: "120px", sm: "140px", md: "166px" }}
                                h="40px"
                                bg="rgba(255, 255, 212, 0.1)"
                                padding="4px 16px"
                                _hover={{
                                    bg: "rgba(255, 255, 212, 0.200)",
                                }}
                            >
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="16px"
                                    lineHeight="24px"
                                    color="#FFFFD4"
                                    noOfLines={1}
                                >
                                    #Topicos
                                </Text>
                            </Button>
                            <Button
                                borderRadius="24px"
                                w={{ base: "120px", sm: "140px", md: "166px" }}
                                h="40px"
                                bg="rgba(255, 255, 212, 0.1)"
                                padding="4px 16px"
                                _hover={{
                                    bg: "rgba(255, 255, 212, 0.200)",
                                }}
                            >
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="16px"
                                    lineHeight="24px"
                                    color="#FFFFD4"
                                    noOfLines={1}
                                >
                                    #Topicos
                                </Text>
                            </Button>
                            <Button
                                borderRadius="24px"
                                w={{ base: "120px", sm: "140px", md: "166px" }}
                                h="40px"
                                bg="rgba(255, 255, 212, 0.1)"
                                padding="4px 16px"
                                _hover={{
                                    bg: "rgba(255, 255, 212, 0.200)",
                                }}
                            >
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="16px"
                                    lineHeight="24px"
                                    color="#FFFFD4"
                                    noOfLines={1}
                                >
                                    #Topicos
                                </Text>
                            </Button>
                            <Button
                                borderRadius="24px"
                                w={{ base: "120px", sm: "140px", md: "166px" }}
                                h="40px"
                                bg="rgba(255, 255, 212, 0.1)"
                                padding="4px 16px"
                                _hover={{
                                    bg: "rgba(255, 255, 212, 0.200)",
                                }}
                            >
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="16px"
                                    lineHeight="24px"
                                    color="#FFFFD4"
                                    noOfLines={1}
                                >
                                    #Topicos
                                </Text>
                            </Button>
                            <Button
                                borderRadius="24px"
                                w={{ base: "120px", sm: "140px", md: "166px" }}
                                h="40px"
                                bg="rgba(255, 255, 212, 0.1)"
                                padding="4px 16px"
                                _hover={{
                                    bg: "rgba(255, 255, 212, 0.200)",
                                }}
                            >
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="16px"
                                    lineHeight="24px"
                                    color="#FFFFD4"
                                    noOfLines={1}
                                >
                                    #Topicos
                                </Text>
                            </Button>
                            <Button
                                borderRadius="24px"
                                w={{ base: "120px", sm: "140px", md: "166px" }}
                                h="40px"
                                bg="rgba(255, 255, 212, 0.1)"
                                padding="4px 16px"
                                _hover={{
                                    bg: "rgba(255, 255, 212, 0.200)",
                                }}
                            >
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="16px"
                                    lineHeight="24px"
                                    color="#FFFFD4"
                                    noOfLines={1}
                                >
                                    #Topicos
                                </Text>
                            </Button>
                            <Button
                                borderRadius="24px"
                                w={{ base: "120px", sm: "140px", md: "166px" }}
                                h="40px"
                                bg="rgba(255, 255, 212, 0.1)"
                                padding="4px 16px"
                                _hover={{
                                    bg: "rgba(255, 255, 212, 0.200)",
                                }}
                            >
                                <Text
                                    className={inter.className}
                                    fontWeight={400}
                                    fontSize="16px"
                                    lineHeight="24px"
                                    color="#FFFFD4"
                                    noOfLines={1}
                                >
                                    #Topicos
                                </Text>
                            </Button>



                        </SimpleGrid>

                    </VStack>
                </Box>

            </Box>
        </Flex>
    );
}
