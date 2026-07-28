
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaUser,
  FaSignOutAlt,
  FaHome,
  FaMapMarkerAlt,
  FaBars,
} from "react-icons/fa";

function Navbar() {
  const pathname = usePathname();

  const pageactive =  pathname.startsWith('/destination') || pathname.startsWith('/exploretour') || pathname.startsWith("/travelbooking") ||
    pathname.startsWith("/gallery") || pathname.startsWith("/travelguide");
    

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-primary px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              <Link
                href="#"
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              >
                <FaTwitter />
              </Link>

              <Link
                href="#"
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="#"
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>

          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              <Link href="#" className="text-light me-3 text-decoration-none">
                <small>
                  <FaUser className="me-2" />
                  Register
                </small>
              </Link>

              <Link href="#" className="text-light me-3 text-decoration-none">
                <small>
                  <FaSignOutAlt className="me-2" />
                  Login
                </small>
              </Link>

              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle text-light text-decoration-none"
                  data-bs-toggle="dropdown"
                >
                  <small>
                    <FaHome className="me-2" />
                    My Dashboard
                  </small>
                </a>

                <div className="dropdown-menu rounded">
                  <Link href="#" className="dropdown-item">
                    <FaUser className="me-2" />
                    My Profile
                  </Link>

                  <Link href="#" className="dropdown-item">
                    Notifications
                  </Link>

                  <Link href="#" className="dropdown-item">
                    Account Settings
                  </Link>

                  <Link href="#" className="dropdown-item">
                    <FaSignOutAlt className="me-2" />
                    Log Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link href="/" className="navbar-brand p-0">
            <h1 className="m-0">
              <FaMapMarkerAlt className="me-3" />
              Travela
            </h1>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <FaBars />
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link href="/" className={`nav-item nav-link ${pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>

              <Link href="/about" className={`nav-item nav-link ${pathname === '/about' ? 'active' : ''}`}>
                About
              </Link>
              <Link href="/services" className={`nav-item nav-link ${pathname === '/services' ? 'active' : ''}`}>
                Services
              </Link>

              <Link href="/packages" className={`nav-item nav-link ${pathname === '/packages' ? 'active' : ''}`}>
                Packages
              </Link>

              <Link href="/blog" className={`nav-item nav-link ${pathname === '/blog' ? 'active' : ''}`}>
                Blog
              </Link>

              <div className="nav-item dropdown">
                <a href="#" className={`nav-link dropdown-toggle ${pageactive ? 'active' : ''}`} data-bs-toggle="dropdown">Pages</a>

                <div className="dropdown-menu m-0">
                  <Link href="/destination" className={`dropdown-item ${pathname === '/destination' ? 'active' : ''}`}>
                    Destination
                  </Link>

                  <Link href="/exploretour" className={`dropdown-item ${pathname === '/exploretour' ? 'active' : ''}`}>
                    Explore Tour
                  </Link>

                  <Link href="/travelbooking" className={`dropdown-item ${pathname === '/travelbooking' ? 'active' : ''}`}>
                    Travel Booking
                  </Link>

                  <Link href="/gallery" className={`dropdown-item ${pathname === '/gallery' ? 'active' : ''}`}>Our Gallery</Link>

                  <Link href="/travelguide" className={`dropdown-item ${pathname === '/travelguide' ? 'active' : ''}`}>
                    Travel Guides
                  </Link>
                </div>
              </div>

              <Link href="/contact" className={`nav-item nav-link ${pathname === '/contact' ? 'active' : ''}`}>
                Contact
              </Link>
            </div>

            <Link
              href="/booking"
              className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4"
            >
              Book Now
            </Link>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </>
  );
}

export default Navbar;