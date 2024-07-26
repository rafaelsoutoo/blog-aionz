import { useEffect, useState } from 'react';
import { Box, Button, Flex, Image, SimpleGrid, Text, VStack, Spinner } from '@chakra-ui/react';
import { getTopics } from '@/services/topicsService'; 
import { TopicDTO } from '../dtos/TopicDTO';

export function Recommended() {
  const [topics, setTopics] = useState<TopicDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const fetchedTopics = await getTopics();
        setTopics(fetchedTopics);
      } catch (error) {
        setError('Failed to fetch topics.');
      } finally {
        setLoading(false);
      }
    };

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
            {loading ? (
              <Spinner
                speed="0.65s"
                emptyColor="green.200"
                size="xl"
                mt={10}
              />
            ) : error ? (
              <Text color="red.500">{error}</Text>
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
