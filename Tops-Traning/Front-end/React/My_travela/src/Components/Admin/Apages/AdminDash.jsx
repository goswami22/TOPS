import React from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import AdminDashboardAnalytics from './AdminDashboardAnalytics'
import AdminFooter from './AdminFooter'

function AdminDash() {
  return (
    <div>
      <Aheader />
      <Ahero title={'Admin Dashboard'} page={'Admin Dashboard'} />

      <section className="container py-5">
        <div className="row text-center g-4">

          <div className="col-md-3">
            <div className="p-4 shadow rounded bg-white h-100">
              <i className="fa fa-globe fa-3x text-primary mb-3"></i>
              <h5>Worldwide Tours</h5>
              <p className="text-muted">
                Explore amazing destinations around the world with us.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 shadow rounded bg-white h-100">
              <i className="fa fa-hotel fa-3x text-primary mb-3"></i>
              <h5>Luxury Hotels</h5>
              <p className="text-muted">
                Stay in premium hotels with the best facilities.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 shadow rounded bg-white h-100">
              <i className="fa fa-plane fa-3x text-primary mb-3"></i>
              <h5>Flight Booking</h5>
              <p className="text-muted">
                Book domestic and international flights at great prices.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 shadow rounded bg-white h-100">
              <i className="fa fa-headset fa-3x text-primary mb-3"></i>
              <h5>24/7 Support</h5>
              <p className="text-muted">
                Our travel experts are available anytime to help you.
              </p>
            </div>
          </div>

        </div>
      </section>

      <AdminDashboardAnalytics />
      <AdminFooter/>

    </div>
  )
}

export default AdminDash
