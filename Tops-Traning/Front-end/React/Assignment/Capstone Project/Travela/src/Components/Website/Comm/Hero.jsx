import React from 'react'

function Hero({ title, page }) {
    

    return (
        <div>
            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h3 className="text-white display-3 mb-4">{title}</h3>
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active text-white">{page}</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}

        </div>
    )
}

export default Hero
