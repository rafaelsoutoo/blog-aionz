import {VStack } from "@chakra-ui/react";
import { Header } from "@/Components/Header";
import { NewArticles } from "@/Components/NewArticles";

export default function Index() {
  return (
    <VStack >
      <Header/>
      <NewArticles/>
    </VStack>
  )
}