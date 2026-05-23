
import React from "react";

function Card2({img, title, desc, btn}) {

    return (
        <div className="col-md-3">
            <div className="card" style={{width: "18rem"}}>
                <img src={img} className="card-img-top" alt="card" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <button className="btn btn-primary">{btn}</button>
                </div>
            </div>
        </div>
    )
}

export default Card2;
