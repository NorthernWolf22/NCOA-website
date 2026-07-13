"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';

//services
import { Carousel, CarouselItems } from '@/generated/prisma/client';

//icons
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

//components
import IconComponent from '@/components/IconComponent';
import SectionHeadingComponent from '@/components/SectionHeadingComponent';
import CarouselCardComponent from '@/components/CarouselCardComponent';


type CarouselModuleProps = {
    carousel: Carousel & {
        items: CarouselItems[];
    }
};

function CarouselModule({ carousel }: CarouselModuleProps) {

    const sliderSettings = {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 24
            }
        }
    }

    return (
        <section className="carouselModule">
            <div className="container">
                <div className="grid">
                    <div className='col-4 sm-col-12'>
                        <SectionHeadingComponent sectionSubHeading="// NCOA team" sectionHeading={carousel?.heading} sectionHeadingLight={carousel?.headingLight} />
                    </div>
                    <div className="col-4 sm-col-12">
                        <div className='carouselModule__inner'>
                            <div className='carouselModule__inner-controls'>
                                <IconComponent
                                    iconType="button" 
                                    iconName={faChevronLeft} 
                                    iconSize="large" 
                                    variant="primary"
                                    rounded
                                    className="swiper-button-prev icon--btn icon--primary" 
                                />
                                <IconComponent 
                                    iconType="button" 
                                    iconName={faChevronRight} 
                                    iconSize="large" 
                                    variant="primary"
                                    rounded
                                    className="swiper-button-next icon--btn icon--primary" 
                                />
                            </div>
                            <Swiper
                                modules={[Navigation]}
                                {...sliderSettings}
                            >
                                {
                                    carousel?.items?.map((carouselItem) => (
                                        <SwiperSlide>
                                            <CarouselCardComponent
                                                carouselImage={carouselItem.carouselImage}
                                                carouselImageAlt={carouselItem.carouselImageAlt}
                                                carouselTitle={carouselItem.carouselTitle}
                                                carouselSubTitle={carouselItem.carouselSubTitle}
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CarouselModule;
