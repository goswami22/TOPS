import Navbar from '@/Layout/comm/Navbar'
import React from 'react'

function page() {
    return (
        <div>
            <Navbar />


            <div>
                {/* Header Start */}
                <div className="container-fluid bg-breadcrumb">
                    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                        <h3 className="text-white display-3 mb-4">Contact Us</h3>
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active text-white">Contact</li>
                        </ol>
                    </div>
                </div>
                {/* Header End */}
                {/* Contact Start */}
                <div className="container-fluid contact bg-light py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Contact Us</h5>
                            <h1 className="mb-0">Contact For Any Query</h1>
                        </div>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-4">
                                <div className="bg-white rounded p-4">
                                    <div className="text-center mb-4">
                                        <i className="fa fa-map-marker-alt fa-3x text-primary" />
                                        <h4 className="text-primary"><address /></h4>
                                        <p className="mb-0">123 ranking Street, <br /> New York, USA</p>
                                    </div>
                                    <div className="text-center mb-4">
                                        <i className="fa fa-phone-alt fa-3x text-primary mb-3" />
                                        <h4 className="text-primary">Mobile</h4>
                                        <p className="mb-0">+012 345 67890</p>
                                        <p className="mb-0">+012 345 67890</p>
                                    </div>
                                    <div className="text-center">
                                        <i className="fa fa-envelope-open fa-3x text-primary mb-3" />
                                        <h4 className="text-primary">Email</h4>
                                        <p className="mb-0">info@example.com</p>
                                        <p className="mb-0">info@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <h3 className="mb-2">Send us a message</h3>
                                <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control border-0" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: 160 }} defaultValue={""} />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12">
                                <div className="rounded">
                                    <iframe className="rounded w-100" style={{ height: 450 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact End */}
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
    )
}

export default page
