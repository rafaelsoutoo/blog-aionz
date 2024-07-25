import { Button, Flex, Image, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


export function NewsLetter() {
    return (
        <Flex mt={100} maxW={1700} mb={100}>
            <SimpleGrid
                columns={{ base: 1, sm: 2, md: 4 }}
                justifyContent="space-between"
                alignItems="center"
                display="flex"
            >
                <Image
                    src="LetterIcon.svg"
                />
                 <Text
                    className={inter.className}
                    noOfLines={2}
                    fontSize="20px"
                    fontWeight={400}
                    lineHeight="28px"
                    whiteSpace="pre-line"
                    ml={{base: "none", sm: "none", md: "16px"}}
                    mr={{base: "none", sm: "none", md: "16px", lg: "30px"}}

                >
                    <span style={{ color: "#005257", fontWeight: 600 }}>Assine nossa newsletter</span> e acesse o melhor{'\n'} conteúdo sobre a digitalização do agronegócio!
                </Text>

                <Input
                    className={inter.className}
                    w="386px"
                    h="56px"
                    borderRadius="40px"
                    placeholder="Insira seu e-mail"
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
                    mr={{base: "none", sm: "none", md: "4px"}}
                    ml={{base: "none", sm: "none", md: "16px", lg: "30px"}}
                />

                <Button
                    w="179px"
                    h="56px"
                    borderRadius="140px"
                    //padding="16"
                    bg="#005257"
                    _hover={{
                        bg:"#023535"
                    }}
                >
                    <Text
                    className={inter.className}
                    fontSize="16px"
                    fontWeight={500}
                    lineHeight="24px"
                    color="#FCFCFC"

                    >
                        Inscrever-se
                    </Text>
                </Button>
            </SimpleGrid>
        </Flex>
    )
}