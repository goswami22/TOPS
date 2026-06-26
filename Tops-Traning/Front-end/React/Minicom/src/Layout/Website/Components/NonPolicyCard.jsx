import React from 'react'

function NonPolicyCard({ image, title, discription }) {
    return (
        <div>
            <div className="nonpolicycard">
                <div className="image-box bg-white">
                    <img src={image} alt="non policy card image"  className='img-fluid'/>
                </div>
                <h3 className='fs-6 fw-bold my-3'>{title}</h3>
                <p>{discription}</p>
            </div>
        </div>
    )
}

export default NonPolicyCard
