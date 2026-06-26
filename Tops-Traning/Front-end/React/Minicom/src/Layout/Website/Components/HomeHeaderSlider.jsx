import React from 'react';
import HomeHeaderSliderCard from './HomeHeaderSliderCard';

function HomeHeaderSlider() {

    const homesliderCard = [
        {
            icon: '/image/homeSider1armchair_beeb15d0-e4cd-4f7f-a928-00873880baed.svg',
            title: 'Sofas & Seating'
        },
        {
            icon: '/image/homeSlider2hotel.svg',
            title: 'Bedroom Furniture'
        },
        {
            icon: '/image/homeSlider3shelf.svg',
            title: 'Storage & Organization'
        },
        {
            icon: '/image/homeSlider4coffee-table.svg',
            title: 'Tables & Desks'
        },
        {
            icon: '/image/homeSlider5lamp.svg',
            title: 'Lighting & Lamps'
        },
        {
            icon: '/image/homeSlider6potted-plant.svg',
            title: 'Flower Pots & Planters'
        },
    ];

    return (
        <section id="homeslider" className='mt-5'>
            <div className="container-fluid">
                <div className="sliderCard-wrapper">
                    <div className="slider-track">
                        {
                        [...homesliderCard, ...homesliderCard].map((item, index) => (
                            <HomeHeaderSliderCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                            />
                        ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHeaderSlider;