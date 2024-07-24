import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
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

const StyledSwiper = styled(Swiper)`
    .swiper-slide {
        transition: transform 0.4s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
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
        background: #35363A;
        opacity: 1;
    }

    .swiper-pagination-bullet-active {
        background: #d60257;
    }

`;

export function NewArticles() {
    const isBaseOrSm = useBreakpointValue({ base: true, sm: true, md: false });

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
                                borderRadius="24px"
                                w={{ base: "60%", sm: "50%" }}
                                h={{ base: "350px", sm: "400px" }}
                                rounded={10}
                                boxShadow="3px 3px 3px #d60257"
                                position="relative"
                                bg="gray.200"
                            />
                        </SwiperSlide>

                    </StyledSwiper>
                </Flex>
            ) : (
                <Flex mt={200} gap={6} justify="center">
                    <Box
                        // w="674px"
                        // h="523px"

                        w={{ md: "488px", lg: "596px",xl: "674px" }}
                        h={{ md: "523px", lg: "523px" }}
                        bg="red"
                        borderRadius="24px"
                    />

                    

                    <Flex direction="column" gap={6}>
                        <Box
                            // w="476px"
                            // h="252px"
                            w={{ md: "250px", lg: "358px", xl: "476px"}}
                            h={{ md: "252px", lg: "252px" }}
                            bg="red"
                            borderRadius="24px"
                        />
                        <Box
                            // w="476px"
                            // h="252px"
                            w={{ md: "250px", lg: "358px", xl:"476px"}}
                            h={{ md: "252px", lg: "252px" }}
                            bg="red"
                            borderRadius="24px" />
                    </Flex>
                </Flex>
            )}
        </>
    );
}
