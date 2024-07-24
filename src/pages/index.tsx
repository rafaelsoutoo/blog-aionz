import { Divider, VStack } from "@chakra-ui/react";
import { Header } from "@/Components/Header";
import { NewArticles } from "@/Components/NewArticles";

export default function Index() {
  return (
    <VStack >
      <Header />
      <NewArticles />
      <Divider borderColor="#C5CAC5" w="65%"  mt={100}/>
    </VStack>
  )
}