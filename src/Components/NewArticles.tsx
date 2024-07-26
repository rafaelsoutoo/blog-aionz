import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
    Autoplay,
} from 'swiper/modules';
import { Inter } from "next/font/google";

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

    return (
        <>
            {isBaseOrSm ? (
                <Flex mt={100} width="100%" justify="center">
                    <StyledSwiper
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                        centeredSlides={true}
                        slidesPerView={1}
                        spaceBetween={5}
                        style={{ width: "100%", height: 'auto' }}
                    >
                        <SwiperSlide >
                            <Box
                                w={{ base: "60%", sm: "50%" }}
                                h={{ base: "350px", sm: "400px" }}
                                position="relative"
                                borderRadius="24px"
                                bg="gray.200"
                            >
                                <Image
                                    src="ImageTest.svg"
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
                                    style={{ borderRadius: '24px' }}
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

                                    > 234234234adipisicing elit. Vitae neque facere expedita adipisci perferendis et unde fugit dignissimos accusantium soluta dolorem, voluptatibus quam ullam cupiditate reprehenderit. Sunt maiores quod accusamus!</Text>
                                    <Text
                                        className={inter.className}
                                        color="#FCFCF8"
                                        fontWeight={400}
                                        fontSize="14px"
                                        lineHeight="22px"
                                        noOfLines={1}

                                    >10 de Abril de 2024</Text>
                                </Box>

                            </Box>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Box
                                w={{ base: "60%", sm: "50%" }}
                                h={{ base: "350px", sm: "400px" }}
                                position="relative"
                                borderRadius="24px"
                                bg="gray.200"
                            >
                                <Image
                                    src="ImageTest.svg"
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
                                    style={{ borderRadius: '24px' }}
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

                                    >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae neque facere expedita adipisci perferendis et unde fugit dignissimos accusantium soluta dolorem, voluptatibus quam ullam cupiditate reprehenderit. Sunt maiores quod accusamus!</Text>
                                    <Text
                                        className={inter.className}
                                        color="#FCFCF8"
                                        fontWeight={400}
                                        fontSize="14px"
                                        lineHeight="22px"
                                        noOfLines={1}

                                    >10 de Abril de 2024</Text>
                                </Box>

                            </Box>
                        </SwiperSlide>

                    </StyledSwiper>
                </Flex>
            ) : (
                <Flex mt={200} gap={6} justify="center" maxW={1700}>
                    <Box
                        w={{ md: "488px", lg: "596px", xl: "674px" }}
                        h={{ md: "523px", lg: "523px" }}
                        borderRadius="24px"
                        position="relative"
                        overflow="hidden"
                    >
                        <Image
                            src="ImageTest.svg"
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

                            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae neque facere expedita adipisci perferendis et unde fugit dignissimos accusantium soluta dolorem, voluptatibus quam ullam cupiditate reprehenderit. Sunt maiores quod accusamus!</Text>
                            <Text
                                className={inter.className}
                                color="#FCFCF8"
                                fontWeight={400}
                                fontSize="14px"
                                lineHeight="22px"
                                noOfLines={1}

                            >10 de Abril de 2024</Text>
                        </Box>

                    </Box>



                    <Flex direction="column" gap={6}>
                        <Box
                            w={{ md: "250px", lg: "358px", xl: "476px" }}
                            h={{ md: "252px", lg: "250px" }}
                            borderRadius="24px"
                            position="relative"
                            overflow="hidden"
                        >
                            <Image
                                src="ImageTest.svg"
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

                                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam pariatur maiores accusantium suscipit maxime nobis, ipsam delectus enim, vero, odio dolore est quasi commodi. Id sunt neque debitis voluptas.</Text>
                                <Text
                                    className={inter.className}
                                    color="#FCFCF8"
                                    fontWeight={400}
                                    fontSize="14px"
                                    lineHeight="22px"
                                    noOfLines={3}

                                >10 de Abril de 2024</Text>
                            </Box>
                        </Box>
                        <Box
                            w={{ md: "250px", lg: "358px", xl: "476px" }}
                            h={{ md: "252px", lg: "250px" }}
                            borderRadius="24px"
                            position="relative"
                            overflow="hidden"
                        >
                            <Image
                                src="ImageTest.svg"
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
                                    noOfLines={2}

                                >loreasidasoibdiuoabsdaosihdioahbsdiobaoibdssobdfisbd</Text>
                                <Text
                                    className={inter.className}
                                    color="#FCFCF8"
                                    fontWeight={400}
                                    fontSize="14px"
                                    lineHeight="22px"
                                    noOfLines={1}

                                >10 de Abril de 2024</Text>
                            </Box>

                        </Box>
                    </Flex>
                </Flex>
            )}
        </>
    );
}
