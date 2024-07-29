import { Button, Flex, Image, Input, SimpleGrid, Text, Box, useToast } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export function NewsLetter() {

    const toast = useToast()
    const [email, setEmail] = useState('');

    const validate = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubscribe = () => {
        const val = validate(email)
        if (email && val === true) {
            toast({
                title: 'E-mail enviado com sucesso.',
                description: email,
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            setEmail('');
        } else {
            toast({
                title: 'Erro ao enviar e-mail.',
                description: 'Por favor, insira um e-mail válido.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };


    return (
        <Flex mt={100} maxW={1700} mb={100} direction="column" alignItems="center">
            <SimpleGrid
                columns={{ base: 1, md: 1, lg: 2 }}
                spacingY={{ base: "24px", md: "24px", lg: '0' }}
                px={{ base: "4px", md: "4px", lg: '10px' }}
                alignItems="center"
                w="full"
            >
                <Box display="flex" flexDirection={{ base: "column", md: "column",lg: "row" }} alignItems={{ base: "center", md: "center" }}>
                    <Image src="LetterIcon.svg" alt="Letter icon" mb={{ base: "16px", md: "20px", lg: '0' }} mr={{ base: "0px", md: "0", lg: '20px' }} />
                    <Text
                        className={inter.className}
                        noOfLines={3}
                        fontSize="20px"
                        fontWeight={400}
                        lineHeight="28px"
                        whiteSpace="pre-line"
                        textAlign={{base: "center", lg: "initial"}}
                    >
                        <span style={{ color: "#005257", fontWeight: 600 }}>Assine nossa newsletter</span> e acesse o melhor{'\n'} conteúdo sobre a digitalização do agronegócio!
                    </Text>
                </Box>

                <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center">
                    <Input
                        className={inter.className}
                        w={{base: "300px", sm: "386px", md:"300px", lg: "386px"}}
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
                        mb={{ base: "16px", md: "0px" }}
                        mr={{ base: "0px", md: "4px" }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}


                    />
                    <Button
                        w={{base: "300px", sm: "386px", md:"170px", lg: "179px"}}
                        h="56px"
                        borderRadius="140px"
                        bg="#005257"
                        _hover={{ bg: "#023535" }}
                        onClick={handleSubscribe}
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
                </Box>
            </SimpleGrid>
        </Flex>
    );
}
