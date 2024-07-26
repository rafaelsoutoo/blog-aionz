import { useEffect, useState } from 'react';
import { Box, Button, Flex, Image, SimpleGrid, Text, VStack, Spinner, useToast } from '@chakra-ui/react';
import { TopicDTO } from '../dtos/TopicDTO';
import api from '@/services/api';

export function Recommended() {
  const [topics, setTopics] = useState<TopicDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true)
  const toast = useToast();


  async function fetchTopics() {
    try {
      setIsLoading(true);
      const response = await api.get('/topics');
      const topics = response.data
      setTopics(topics)

    } catch (error) {
      console.log(error);
      toast({
        title: 'Erro ao carregar os tópicos',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTopics();
  }, []);

  return (
    <Flex mt={100} maxW={2300} w="100%">
      <Box
        position="relative"
        h={{ base: "540px", sm: "400px", md: "362px", lg: "362px" }}
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
          mt={{ base: "30px", sm: "45px", md: "62px", lg: "62px" }}
        >
          <VStack>
            <Text
              fontWeight={700}
              fontSize={{ base: "22px", sm: "28px" }}
              lineHeight="16px"
              color="#FFFFD4"
            >
              Tópicos recomendados
            </Text>
            {isLoading ? (
              <Spinner
                speed="0.65s"
                emptyColor="green.400"
                size="xl"
                mt={16}
              />
            ) : (
              <SimpleGrid
                mt="30px"
                columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 5 }}
                gap="16px"
                justifyContent="center"
              >
                {topics.map(topic => (
                  <Button
                    key={topic.id}
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
                      fontWeight={400}
                      fontSize="16px"
                      lineHeight="24px"
                      color="#FFFFD4"
                      noOfLines={1}
                    >
                      #{topic.name}
                    </Text>
                  </Button>
                ))}
              </SimpleGrid>
            )}
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
