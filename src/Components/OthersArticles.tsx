import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Button, SimpleGrid, Image, VStack, HStack, Spinner, useToast } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Inter } from 'next/font/google';
import api from '@/services/api';
import { ArticleDTO } from '@/dtos/ArticleDTO';

const inter = Inter({ subsets: ["latin"] });

export function OthersArticles() {
    const [articles, setArticles] = useState<ArticleDTO[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const toast = useToast();

    async function fetchInitialArticles(limit: number) {
        try {
            setIsLoading(true);
            const response = await api.get(`/posts`, {
                params: {
                    page: 1,
                    limit
                }
            });
            const fetchedArticles = response.data;
            setArticles(fetchedArticles);
            setPage(1);
        } catch (error) {
            toast({
                title: 'Erro ao carregar os artigos',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    }

    async function loadMoreArticles() {
        setIsLoadingMore(true);
        try {
            const response = await api.get(`/posts`, {
                params: {
                    page: page + 1,
                    limit: 6
                }
            });

            const moreArticles = response.data;
            setArticles((prevArticles) => [...prevArticles, ...moreArticles]);
            setPage(page + 1);
        } catch (error) {
            console.error(error);
            toast({
                title: 'Erro ao carregar mais artigos',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoadingMore(false);
        }
    }

    useEffect(() => {
        fetchInitialArticles(6);
    }, []);

    const showLessArticles = () => {
        setArticles(articles.slice(0, 6));
        setPage(1);
        setShowMore(false);
    };


    return (
        <Flex mt={100} maxW={1700} w="100%" direction="column" alignItems="center">
            <Flex w="100%" justifyContent="start">
                <Text
                    className={inter.className}
                    fontWeight={700}
                    fontSize="28px"
                    lineHeight="40px"
                    color="#005257"
                    ml={{ base: 5, sm: 20, md: "5%", lg: "10%", xl: "10%" }}
                >
                    Outros artigos
                </Text>
            </Flex>


            <SimpleGrid
                columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
                spacing={30}
                mt={30}
            >
                {articles.map((article) => (
                    <Box
                        key={article.id}
                        w={{ base: "260px", sm: "333px", md: "340px", lg: "300px", xl: "370px" }}
                        minH="473px"
                        h="full"
                        borderRadius="32px"
                        bg="#FCFCF8"
                        borderWidth={1}
                        borderColor="#C5CAC5"
                    >
                        <Image
                            src={article.image}
                            alt={article.title}
                            borderTopRadius="32px"
                        />

                        <HStack justifyContent="space-between" mt={4} mx={5} >
                            <Text
                                className={inter.className}
                                noOfLines={1}
                                fontWeight={400}
                                fontSize="18px"
                                lineHeight="32px"
                                color="#404541"
                            >{new Date(article.createdAt).toLocaleDateString()}</Text>

                            <Flex>
                                <Image
                                    src="heart.svg"
                                    w="24px"
                                    h="24px"
                                />
                                <Text
                                    className={inter.className}
                                    noOfLines={1}
                                    fontWeight={400}
                                    fontSize="14px"
                                    lineHeight="22px"
                                    ml="6px"
                                    color="#191B18"
                                >{article.likeCount}</Text>
                            </Flex>
                        </HStack>

                        <VStack mx={5} alignItems="flex-start">
                            <Text
                                className={inter.className}
                                noOfLines={2}
                                fontWeight={700}
                                mt={2}
                                fontSize="18px"
                                lineHeight="28px"
                                color="#023535"
                                textAlign="left"
                            >
                                {article.title}
                            </Text>

                            <Text
                                className={inter.className}
                                noOfLines={3}
                                fontWeight={400}
                                fontSize="16px"
                                lineHeight="24px"
                                color="#404541"
                            >
                                {article.description}
                            </Text>

                            <Flex
                                alignItems="flex-end"
                                mt={{ base: 'none', sm: 2, md: 4, lg: 0 }}
                                mb={{ base: 'none', sm: 2, md: 4, lg: 5 }}
                                justifyContent="flex-start"
                                w="100%"
                            >
                                <Button
                                    position="relative"
                                    bg='transparent'
                                    padding="0"
                                    h="24px"
                                    justifyContent="flex-start"
                                    _active={{
                                        bg: "white"
                                    }}
                                    _hover={{
                                        _after: {
                                            width: '100%',
                                            transition: 'width 0.3s',
                                        },
                                    }}
                                    _after={{
                                        content: '""',
                                        position: 'absolute',
                                        width: '0',
                                        height: '2px',
                                        bottom: '0',
                                        left: '0',
                                        bg: '#005257',
                                        transition: 'width 0.3s',
                                    }}
                                    as="a"
                                >
                                    <Text
                                        className={inter.className}
                                        fontWeight={500}
                                        fontSize="16px"
                                        lineHeight="24px"
                                        color="#005257"
                                    >
                                        Leia mais
                                    </Text>
                                </Button>
                                <ArrowForwardIcon color="#005257" ml={3} boxSize={5} />
                            </Flex>
                        </VStack>
                    </Box>
                ))}
            </SimpleGrid>
            {isLoadingMore && <Spinner size="lg" mt={10} />}

            <Flex mt={10} direction="column" alignItems="center">
                <Button
                    w="163px"
                    h="56px"
                    borderRadius="140px"
                    borderWidth={1}
                    bg="white"
                    borderColor="#005257"
                    _focus={{ bg: "white" }}
                    onClick={loadMoreArticles}
                    disabled={isLoadingMore}
                    mb={4}
                >
                    <Text
                        className={inter.className}
                        fontWeight={500}
                        fontSize="16px"
                        lineHeight="24px"
                        color="#005257"
                    >
                        Ver mais
                    </Text>
                </Button>
                {articles.length > 6 && (
                    <Button
                        w="163px"
                        h="56px"
                        borderRadius="140px"
                        borderWidth={1}
                        bg="white"
                        borderColor="#005257"
                        _focus={{ bg: "white" }}
                        onClick={showLessArticles}
                    >
                        <Text
                            className={inter.className}
                            fontWeight={500}
                            fontSize="16px"
                            lineHeight="24px"
                            color="#005257"
                        >
                            Ver menos
                        </Text>
                    </Button>
                )}
            </Flex>
        </Flex>
    );
}
