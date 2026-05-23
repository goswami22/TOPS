import React from "react";

function Card3({img, desc, title, btn}){
    return(

        <div className="col-md-3">
            <div className="card">
                <img src={img} alt="" />
                <div className="card-body">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <button className="btn btn-danger">{btn}</button>
                </div>
            </div>
        </div>
    )
}

export default Card3;