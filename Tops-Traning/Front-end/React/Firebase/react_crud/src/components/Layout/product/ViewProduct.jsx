import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ViewProduct() {

    const location = useLocation();
    const navigate = useNavigate();

    const product = location.state;

    return (
        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">
                    <h3>Product Details</h3>
                </div>

                <div className="card-body">

                    <div className="row">

                        <div className="col-md-5 text-center">

                            <img
                                src={product.image}
                                alt={product.title}
                                className="img-fluid rounded"
                                style={{ maxHeight: "300px" }}
                            />

                        </div>

                        <div className="col-md-7">

                            <h2>{product.title}</h2>

                            <hr />

                            <h5>
                                <strong>Category :</strong> {product.category}
                            </h5>

                            <h5>
                                <strong>Price :</strong> ₹{product.price}
                            </h5>

                            <p>
                                <strong>Description :</strong>
                            </p>

                            <p>{product.des}</p>

                            <button
                                className="btn btn-secondary mt-3"
                                onClick={() => navigate("/")}
                            >
                                <i class="fa-solid fa-arrow-left me-2"></i>Back
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ViewProduct;