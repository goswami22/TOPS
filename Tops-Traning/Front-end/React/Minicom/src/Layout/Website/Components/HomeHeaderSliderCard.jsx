import React from 'react'

function HomeHeaderSliderCard({ icon, title }) {
  return (
    <div className='d-inline-block'>
      <div className="slider-card mx-4">
        <div className="card d-flex py-2 ps-2 pe-3 flex-row align-items-center gap-3 p-2">
          <div className="icon-box bg-white rounded-circle">
            <img src={icon} alt={title} className="HomeSliderCardImg" />
          </div>
          <h6 className="title mb-0 fw-semibold text-nowrap">{title}</h6>
        </div>
      </div>
    </div>
  )
}

export default HomeHeaderSliderCard
