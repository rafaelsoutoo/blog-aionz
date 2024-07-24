import React from 'react';
import { VStack, Link as ChakraLink, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function SideBar (){
  const router = useRouter();
  const { asPath } = useRouter();

  return (
    <VStack align="start" spacing={4} mt={4}>
      <ChakraLink
        onClick={() => {
          router.push("/");
        }}
        _hover={{ bg: "gray.100" }}
        w="100%"
        px={4}
        py={2}
        borderBottom={asPath === "/" ? "1px solid #005257" : ""}
      >
        <Text>Home</Text>
      </ChakraLink>
      <ChakraLink
        onClick={() => {
          router.push("/");
        }}
        _hover={{ bg: "gray.100" }}
        w="100%"
        px={4}
        py={2}
        borderBottom={asPath === "/projetos" ? "1px solid #005257" : ""}
      >
        <Text>Projetos</Text>
      </ChakraLink>
      <ChakraLink
        onClick={() => {
          router.push("/");
        }}
        _hover={{ bg: "gray.100" }}
        w="100%"
        px={4}
        py={2}
        borderBottom={asPath === "/integrantes" ? "1px solid #005257" : ""}
      >
        <Text>Integrantes</Text>
      </ChakraLink>

    </VStack>
  );
};

