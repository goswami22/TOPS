import Navbar from "@/Layout/comm/Navbar";

export default function Blog() {
    return (
        <div>
            <Navbar />

            <div>
                {/* Header Start */}
                <div className="container-fluid bg-breadcrumb">
                    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                        <h3 className="text-white display-3 mb-4">Our Blog</h3>
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active text-white">Blog</li>
                        </ol>
                    </div>
                </div>
                {/* Header End */}
                {/* Blog Start */}
                <div className="container-fluid blog py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Our Blog</h5>
                            <h1 className="mb-4">Popular Travel Blogs</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt tenetur sapiente atque. Magni non explicabo beatae sit, vel reiciendis consectetur numquam id similique sunt error obcaecati ducimus officia maiores.
                            </p>
                        </div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <div className="blog-img-inner">
                                            <img className="img-fluid w-100 rounded-top" src="img/blog-1.jpg" alt="Image" />
                                            <div className="blog-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                        <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />28 Jan 2050</small>
                                            <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />1.7K</a>
                                            <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2" />1K</a>
                                        </div>
                                    </div>
                                    <div className="blog-content border border-top-0 rounded-bottom p-4">
                                        <p className="mb-3">Posted By: Royal Hamblin </p>
                                        <a href="#" className="h4">Adventures Trip</a>
                                        <p className="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <div className="blog-img-inner">
                                            <img className="img-fluid w-100 rounded-top" src="img/blog-2.jpg" alt="Image" />
                                            <div className="blog-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                        <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />28 Jan 2050</small>
                                            <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />1.7K</a>
                                            <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2" />1K</a>
                                        </div>
                                    </div>
                                    <div className="blog-content border border-top-0 rounded-bottom p-4">
                                        <p className="mb-3">Posted By: Royal Hamblin </p>
                                        <a href="#" className="h4">Adventures Trip</a>
                                        <p className="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <div className="blog-img-inner">
                                            <img className="img-fluid w-100 rounded-top" src="img/blog-3.jpg" alt="Image" />
                                            <div className="blog-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                        <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />28 Jan 2050</small>
                                            <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />1.7K</a>
                                            <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2" />1K</a>
                                        </div>
                                    </div>
                                    <div className="blog-content border border-top-0 rounded-bottom p-4">
                                        <p className="mb-3">Posted By: Royal Hamblin </p>
                                        <a href="#" className="h4">Adventures Trip</a>
                                        <p className="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog End */}
                {/* Subscribe Start */}
                <div className="container-fluid subscribe py-5">
                    <div className="container text-center py-5">
                        <div className="mx-auto text-center" style={{ maxWidth: 900 }}>
                            <h5 className="subscribe-title px-3">Subscribe</h5>
                            <h1 className="text-white mb-4">Our Newsletter</h1>
                            <p className="text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                            </p>
                            <div className="position-relative mx-auto">
                                <input className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Subscribe End */}
                {/* Footer Start */}
                <div className="container-fluid footer py-5">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item d-flex flex-column">
                                    <h4 className="mb-4 text-white">Get In Touch</h4>
                                    <a href="#"><i className="fas fa-home me-2" /> 123 Street, New York, USA</a>
                                    <a href="#"><i className="fas fa-envelope me-2" /> info@example.com</a>
                                    <a href="#"><i className="fas fa-phone me-2" /> +012 345 67890</a>
                                    <a href="#" className="mb-3"><i className="fas fa-print me-2" /> +012 345 67890</a>
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-share fa-2x text-white me-2" />
                                        <a className="btn-square btn btn-primary rounded-circle mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn-square btn btn-primary rounded-circle mx-1" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn-square btn btn-primary rounded-circle mx-1" href="#"><i className="fab fa-instagram" /></a>
                                        <a className="btn-square btn btn-primary rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item d-flex flex-column">
                                    <h4 className="mb-4 text-white">Company</h4>
                                    <a href="#"><i className="fas fa-angle-right me-2" /> About</a>
                                    <a href="#"><i className="fas fa-angle-right me-2" /> Careers</a>
                                    <a href="#"><i className="fas fa-angle-right me-2" /> Blog</a>
                                    <a href="#"><i className="fas fa-angle-right me-2" /> Press</a>
                                    <a href="#"><i className="fas fa-angle-right me-2" /> Gift Cards</a>
                                    <a href="#"><i className="fas fa-angle-right me-2" /> Magazine</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item d-flex flex-column">
                                    <h4 className="mb-4 text-white">Support</h4>
                                    <a href="#"><i className="fas fa-angle-right me-2" /> Contact</a>
                                    <a href="#"><i className="fas fa-angle-right me-2" /> Legal Notice</a>
                                    <a href="#"><i className="fas fa-angle-right me-2" /> Privacy Policy</a>
                                    <a href="#"><i className="fas fa-angle-right me-2" /> Terms and Conditions</a>
                                    <a href="#"><i className="fas fa-angle-right me-2" /> Sitemap</a>
                                    <a href="#"><i className="fas fa-angle-right me-2" /> Cookie policy</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item">
                                    <div className="row gy-3 gx-2 mb-4">
                                        <div className="col-xl-6">
                                            <form>
                                                <div className="form-floating">
                                                    <select className="form-select bg-dark border" id="select1">
                                                        <option value={1}>Arabic</option>
                                                        <option value={2}>German</option>
                                                        <option value={3}>Greek</option>
                                                        <option value={3}>New York</option>
                                                    </select>
                                                    <label htmlFor="select1">English</label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-xl-6">
                                            <form>
                                                <div className="form-floating">
                                                    <select className="form-select bg-dark border" id="select1">
                                                        <option value={1}>USD</option>
                                                        <option value={2}>EUR</option>
                                                        <option value={3}>INR</option>
                                                        <option value={3}>GBP</option>
                                                    </select>
                                                    <label htmlFor="select1">$</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <h4 className="text-white mb-3">Payments</h4>
                                    <div className="footer-bank-card">
                                        <a href="#" className="text-white me-2"><i className="fab fa-cc-amex fa-2x" /></a>
                                        <a href="#" className="text-white me-2"><i className="fab fa-cc-visa fa-2x" /></a>
                                        <a href="#" className="text-white me-2"><i className="fas fa-credit-card fa-2x" /></a>
                                        <a href="#" className="text-white me-2"><i className="fab fa-cc-mastercard fa-2x" /></a>
                                        <a href="#" className="text-white me-2"><i className="fab fa-cc-paypal fa-2x" /></a>
                                        <a href="#" className="text-white"><i className="fab fa-cc-discover fa-2x" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End */}
                {/* Copyright Start */}
                <div className="container-fluid copyright text-body py-4">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-md-6 text-center text-md-end mb-md-0">
                                <i className="fas fa-copyright me-2" /><a className="text-white" href="#">Your Site Name</a>, All right reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-start">
                                {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
                                {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
                                {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
                                Designed By <a className="text-white" href="https://htmlcodex.com">HTML Codex</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright End */}
                {/* Back to Top */}
                <a href="#" className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"><i className="fa fa-arrow-up" /></a>
            </div>



        </div>
    );
}