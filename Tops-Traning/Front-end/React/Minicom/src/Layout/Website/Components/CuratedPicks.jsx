import { React } from 'react'
import CuratedPicksProduct from './CuratedPicksProduct'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


function CuratedPicks() {

    const product = [
        {
            image: '/image/home3-cate1.webp',
            title: 'OFFICE FURNITURE',
            subTitle: 'LIVING ROOM',
            discription: 'Upgrade your workspace with ergonomic and stylish office furniture. From sleek desks to comfortable chairs, find everything '
        },
        {
            image: '/image/home3-cate2.webp',
            title: 'VINTAGE ARMCHAIR',
            subTitle: 'CLASSIC DESIGN',
            discription: 'Add a touch of old-world charm to your space with our Vintage Armchair. Featuring elegant curves, premium upholstery.'
        },
        {
            image: '/image/home3-cate3.webp',
            title: 'WOODEN FILING CABINET',
            subTitle: 'ORGANIZED SPACES',
            discription: 'Upgrade your workspace with a Wooden Filing Cabinet designed for durability and elegance. '
        },
        {
            image: '/image/home3-cate4.webp',
            title: 'STYLISH & COMFORTABLE',
            subTitle: 'FABRIC SOFA',
            discription: 'Experience the perfect blend of softness and durability with our Fabric Sofa. Designed for everyday comfort.'
        }
    ]

    return (
        <div>
            <section id='curatedpicks'>
                <div className="container-fluid">
                    <div className="section-header">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <span className='text-secondary'><small>THE ULTIMATE FURNITURE EDIT</small></span>
                                <h2>CURATED PICKS TO ELEVATE</h2>
                            </div>
                            <div className="col-12 col-md-6"></div>
                        </div>
                    </div>


                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        spaceBetween={30}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 2,
                            }
                        }}
                    >

                        {product.map((item, index) => (
                            <SwiperSlide key={index}>
                                <CuratedPicksProduct
                                    image={item.image}
                                    title={item.title}
                                    subTitle={item.subTitle}
                                    discription={item.discription}
                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>
            </section>
        </div>
    )
}

export default CuratedPicks
