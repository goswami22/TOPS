import React from 'react';

function AFooter() {
  return (
    <footer className="border-top py-3 mt-auto">
      <div className="container-fluid">
        <div className="row align-items-center">

          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-white">
              © {new Date().getFullYear()} <strong>Admin Dashboard</strong>. All Rights Reserved.
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <span className="text-white me-3">
              Version 1.0.0
            </span>

            <a href="#" className="text-decoration-none me-3">
              Privacy Policy
            </a>

            <a href="#" className="text-decoration-none">
              Support
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default AFooter;