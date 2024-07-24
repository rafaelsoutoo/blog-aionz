import { Box, Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function OthersArticles() {
    return (
        <Flex mt={100} maxW={1700} w="100%" direction="column" alignItems="center"  >
            <Flex w="100%"  justifyContent="start" px={{ base: 4, md: 10, lg: 20 ,xl:40 }}>
                <Text
                    className={inter.className}
                    fontWeight={700}
                    fontSize="28px"
                    lineHeight="40px"
                    color="#005257"
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
                    w={{ base: "333px", sm: "333px", md: "340px", lg:"300px", xl: "370px" }}
                    h={{ base: "473px", sm: "473px", md: "473px" }}
                    bg="red"
                />
                
                <Box
                    w={{ base: "333px", sm: "333px", md: "340px", lg:"300px", xl: "370px" }}
                    h={{ base: "473px", sm: "473px", md: "473px" }}
                    bg="red"
                />
                
                <Box
                    w={{ base: "333px", sm: "333px", md: "340px", lg:"300px", xl: "370px" }}
                    h={{ base: "473px", sm: "473px", md: "473px" }}
                    bg="red"
                />
                
                <Box
                    w={{ base: "333px", sm: "333px", md: "340px", lg:"300px", xl: "370px" }}
                    h={{ base: "473px", sm: "473px", md: "473px" }}
                    bg="red"
                />
                

            </SimpleGrid>
        </Flex>
    );
}
