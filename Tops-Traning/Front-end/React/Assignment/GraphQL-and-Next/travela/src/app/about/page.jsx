
import Navbar from "@/Layout/comm/Navbar";

export default function page() {
    return (
        <div>
            <Navbar />



            <div>
                {/* hero  */}
                <div className="container-fluid bg-breadcrumb">
                    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                        <h3 className="text-white display-3 mb-4">About Us</h3>
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active text-white">About</li>
                        </ol>
                    </div>
                </div>

                {/* About Start */}
                <div className="container-fluid about py-5">
                    <div className="container py-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-5">
                                <div className="h-100" style={{ border: '50px solid', borderColor: 'transparent #13357B transparent #13357B' }}>
                                    <img src="img/about-img.jpg" className="img-fluid w-100 h-100" alt />
                                </div>
                            </div>
                            <div className="col-lg-7" style={{ background: 'linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(img/about-img-1.png)' }}>
                                <h5 className="section-about-title pe-3">About Us</h5>
                                <h1 className="mb-4">Welcome to <span className="text-primary">Travela</span></h1>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum, doloribus sunt dicta, officia voluptatibus libero necessitatibus natus impedit quam ullam assumenda? Id atque iste consectetur. Commodi odit ab saepe!</p>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos voluptatem suscipit neque enim, doloribus ipsum rem eos distinctio, dignissimos nisi saepe nulla? Libero numquam perferendis provident placeat molestiae quia?</p>
                                <div className="row gy-2 gx-4 mb-4">
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />First Class Flights</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Handpicked Hotels</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />5 Star Accommodations</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Latest Model Vehicles</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />150 Premium City Tours</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />24/7 Service</p>
                                    </div>
                                </div>
                                <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Travel Guide Start */}
                <div className="container-fluid guide py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Travel Guide</h5>
                            <h1 className="mb-0">Meet Our Guide</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-3">
                                <div className="guide-item">
                                    <div className="guide-img">
                                        <div className="guide-img-efects">
                                            <img src="img/guide-1.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
                                        </div>
                                        <div className="guide-icon rounded-pill p-2">
                                            <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                            <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                    <div className="guide-title text-center rounded-bottom p-4">
                                        <div className="guide-title-inner">
                                            <h4 className="mt-3">Full Name</h4>
                                            <p className="mb-0">Designation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="guide-item">
                                    <div className="guide-img">
                                        <div className="guide-img-efects">
                                            <img src="img/guide-2.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
                                        </div>
                                        <div className="guide-icon rounded-pill p-2">
                                            <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                            <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                    <div className="guide-title text-center rounded-bottom p-4">
                                        <div className="guide-title-inner">
                                            <h4 className="mt-3">Full Name</h4>
                                            <p className="mb-0">Designation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="guide-item">
                                    <div className="guide-img">
                                        <div className="guide-img-efects">
                                            <img src="img/guide-3.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
                                        </div>
                                        <div className="guide-icon rounded-pill p-2">
                                            <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                            <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                    <div className="guide-title text-center rounded-bottom p-4">
                                        <div className="guide-title-inner">
                                            <h4 className="mt-3">Full Name</h4>
                                            <p className="mb-0">Designation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="guide-item">
                                    <div className="guide-img">
                                        <div className="guide-img-efects">
                                            <img src="img/guide-4.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
                                        </div>
                                        <div className="guide-icon rounded-pill p-2">
                                            <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                            <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                    <div className="guide-title text-center rounded-bottom p-4">
                                        <div className="guide-title-inner">
                                            <h4 className="mt-3">Full Name</h4>
                                            <p className="mb-0">Designation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Travel Guide End */}
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
                                    <a href><i className="fas fa-home me-2" /> 123 Street, New York, USA</a>
                                    <a href><i className="fas fa-envelope me-2" /> info@example.com</a>
                                    <a href><i className="fas fa-phone me-2" /> +012 345 67890</a>
                                    <a href className="mb-3"><i className="fas fa-print me-2" /> +012 345 67890</a>
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-share fa-2x text-white me-2" />
                                        <a className="btn-square btn btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn-square btn btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn-square btn btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                        <a className="btn-square btn btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item d-flex flex-column">
                                    <h4 className="mb-4 text-white">Company</h4>
                                    <a href><i className="fas fa-angle-right me-2" /> About</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Careers</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Blog</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Press</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Gift Cards</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Magazine</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item d-flex flex-column">
                                    <h4 className="mb-4 text-white">Support</h4>
                                    <a href><i className="fas fa-angle-right me-2" /> Contact</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Legal Notice</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Privacy Policy</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Terms and Conditions</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Sitemap</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Cookie policy</a>
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
                                Designed By <a className="text-white" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a>
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