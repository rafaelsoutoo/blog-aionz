import { Box, Flex, Image, Text, useBreakpointValue, useToast, Spinner } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { Pagination } from 'swiper/modules';
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { ArticleDTO } from "@/dtos/ArticleDTO";
import api from "@/services/api";

const StyledSwiper = styled(Swiper)`
    .swiper-slide {
        transition: transform 0.4s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;  
        height: 600px;
    }

    .swiper-slide-active {
        transform: scale(1.3);
    }

    .swiper-pagination {
        text-align: center;
    }

    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background: #C5CAC5;
        opacity: 1;
    }

    .swiper-pagination-bullet-active {
        background: #023535;
    }
`;

const inter = Inter({ subsets: ["latin"] });

export function NewArticles() {
    const isBaseOrSm = useBreakpointValue({ base: true, sm: true, md: false, lg: false, xl: false });
    const [articles, setArticles] = useState<ArticleDTO[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const toast = useToast();

    async function fetchRecentArticlis() {
        try {
            setIsLoading(true);
            const response = await api.get('/posts?page=1');
            const allArticles: ArticleDTO[] = response.data;
            const articles = allArticles.sort((a: ArticleDTO, b: ArticleDTO) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            const newArticles = articles.slice(0, 3);
            setArticles(newArticles);
        } catch (error) {
            console.log(error);
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

    useEffect(() => {
        fetchRecentArticlis();
    }, []);

    return (
        <>
            {isLoading ? (
                <Flex justify="center" align="center" height="100vh">
                    <Spinner size="xl" />
                </Flex>
            ) : isBaseOrSm ? (
                <Flex mt={100} width="100%" justify="center">
                    <StyledSwiper
                        pagination={true}
                        modules={[Pagination]}
                        centeredSlides={true}
                        slidesPerView={1}
                        spaceBetween={5}
                        style={{ width: "100%", height: 'auto' }}
                    >
                        {articles.map((article, index) => (
                            <SwiperSlide key={index}>
                                <Box
                                    w={{ base: "60%", sm: "50%" }}
                                    h={{ base: "350px", sm: "400px" }}
                                    position="relative"
                                    borderRadius="24px"
                                    bg="gray.200"
                                >
                                    <Image
                                        src={`${article.image}`}
                                        w="full"
                                        h="full"
                                        objectFit="cover"
                                        position="absolute"
                                        style={{ borderRadius: '24px' }}
                                        draggable="false"
                                    />
                                    <Image
                                        src="boxHome.svg"
                                        w="full"
                                        h="auto"
                                        position="absolute"
                                        bottom="0"
                                        left="0"
                                        style={{ borderEndEndRadius: '24px', borderEndStartRadius: '24px' }}
                                        draggable="false"
                                    />
                                    <Box
                                        position="absolute"
                                        bottom="0"
                                        left="0"
                                        w="full"
                                        p={4}
                                        textAlign="start"
                                    >
                                        <Text
                                            className={inter.className}
                                            color="#FFFFD4"
                                            fontWeight={700}
                                            fontSize="20px"
                                            lineHeight="32px"
                                            noOfLines={4}
                                        >
                                            {article.title}
                                        </Text>
                                        <Text
                                            className={inter.className}
                                            color="#FCFCF8"
                                            fontWeight={400}
                                            fontSize="14px"
                                            lineHeight="22px"
                                            noOfLines={1}
                                        >
                                            {new Date(article.createdAt).toLocaleDateString()}
                                        </Text>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </StyledSwiper>
                </Flex>
            ) : (
                <Flex mt={200} gap={6} justify="center" maxW={1700}>
                    {articles.length > 0 && (
                        <>
                            <Box
                                w={{ md: "488px", lg: "596px", xl: "674px" }}
                                h={{ md: "523px", lg: "523px" }}
                                borderRadius="24px"
                                position="relative"
                                overflow="hidden"
                            >
                                <Image
                                    src={articles[0].image}
                                    w="full"
                                    h="full"
                                    objectFit="cover"
                                    position="absolute"
                                    draggable="false"
                                />
                                <Image
                                    src="boxHome.svg"
                                    w="full"
                                    h="auto"
                                    position="absolute"
                                    bottom="0"
                                    left="0"
                                    draggable="false"
                                />
                                <Box
                                    position="absolute"
                                    bottom="0"
                                    left="0"
                                    w="full"
                                    p={4}
                                    textAlign="start"
                                >
                                    <Text
                                        className={inter.className}
                                        color="#FFFFD4"
                                        fontWeight={700}
                                        fontSize="20px"
                                        lineHeight="32px"
                                        noOfLines={4}
                                    >
                                        {articles[0].title}
                                    </Text>
                                    <Text
                                        className={inter.className}
                                        color="#FCFCF8"
                                        fontWeight={400}
                                        fontSize="14px"
                                        lineHeight="22px"
                                        noOfLines={1}
                                    >
                                        {new Date(articles[0].createdAt).toLocaleDateString()}
                                    </Text>
                                </Box>
                            </Box>

                            <Flex direction="column" gap={6}>
                                {articles.slice(1, 3).map((article, index) => (
                                    <Box
                                        key={index}
                                        w={{ md: "250px", lg: "358px", xl: "476px" }}
                                        h={{ md: "252px", lg: "250px" }}
                                        borderRadius="24px"
                                        position="relative"
                                        overflow="hidden"
                                    >
                                        <Image
                                            src={article.image}
                                            w="full"
                                            h="full"
                                            objectFit="cover"
                                            position="absolute"
                                            draggable="false"
                                        />
                                        <Image
                                            src="boxHome.svg"
                                            w="full"
                                            h="auto"
                                            position="absolute"
                                            bottom="0"
                                            left="0"
                                            draggable="false"
                                        />
                                        <Box
                                            position="absolute"
                                            bottom="0"
                                            left="0"
                                            w="full"
                                            p={4}
                                            textAlign="start"
                                        >
                                            <Text
                                                className={inter.className}
                                                color="#FFFFD4"
                                                fontWeight={700}
                                                fontSize="20px"
                                                lineHeight="32px"
                                                noOfLines={3}
                                            >
                                                {article.title}
                                            </Text>
                                            <Text
                                                className={inter.className}
                                                color="#FCFCF8"
                                                fontWeight={400}
                                                fontSize="14px"
                                                lineHeight="22px"
                                                noOfLines={1}
                                            >
                                                {new Date(article.createdAt).toLocaleDateString()}                               </Text>
                                        </Box>
                                    </Box>
                                ))}
                            </Flex>
                        </>
                    )}
                </Flex>
            )}
        </>
    );
}
