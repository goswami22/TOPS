import React from 'react'
import NonPolicyCard from './NonPolicyCard'

function NonPolicy() {

    const NonPolicyCardData = [
        {
            image: '/image/non-policy-image1.svg',
            title: 'Eco-friendly Materials',
            discription: 'We craft our furniture using responsibly sourced, environmentally friendly materials.'
        },
        {
            image: '/image/non-policy-image2.svg',
            title: 'Effortless Assembly',
            discription: 'Thoughtfully designed for quick setup, requiring minimal effort and no extra tools.'
        },
        {
            image: '/image/recycle.svg',
            title: 'Giving Back To Nature',
            discription: 'Every purchase contributes to reforestation efforts, helping restore green spaces.'
        },
        {
            image: '/image/idea.svg',
            title: 'Sustainable Production',
            discription: 'Dedicated to reducing waste and promoting eco-conscious manufacturing practices.'
        },

    ]

    return (
        <div>
            <section id="non-policy">
                <div className="container-fluid">
                    <div className="row">
                        {
                            NonPolicyCardData.map((item, index) => {
                                return (
                                    <div key={index} className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
                                        <NonPolicyCard
                                            image={item.image}
                                            title={item.title}
                                            discription={item.discription}
                                        />
                                    </div>
                                )


                            })
                        }

                    </div>

                </div>
            </section>
        </div>
    )
}

export default NonPolicy
