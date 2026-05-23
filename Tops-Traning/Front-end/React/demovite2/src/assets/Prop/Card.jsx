import React from "react";

function Card({ img, title, desc }) {
    return (

        <div className="col-md-3">
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="title">{title}</h5>
                    <p className="description">{desc}</p>
                    <button href="#" className="btn btn-primary ">Buy</button>
                </div>
            </div>
        </div>

    )
}


export default Card;
