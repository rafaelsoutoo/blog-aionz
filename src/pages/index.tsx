import { Divider, VStack } from "@chakra-ui/react";
import { Header } from "@/Components/Header";
import { NewArticles } from "@/Components/NewArticles";
import { OthersArticles } from "@/Components/OthersArticles";
import { Recommended } from "@/Components/Recommended";

export default function Index() {
  return (
    <VStack>
      <Header />
      <NewArticles />
      <Divider borderColor="#C5CAC5" w="65%"  mt={100} maxW={1221}/>
      <OthersArticles/>
      <Recommended/>
    </VStack>
  )
}