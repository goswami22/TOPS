import React from 'react'

function AdminDashboardAnalytics() {
    return (
        <div>
            <section className="py-4">
                <div className="container-fluid">
                    <div className="row g-4">

                        {/* Sales Overview */}
                        <div className="col-lg-8">
                            <div className="card shadow-sm border-0 p-4 h-100">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h4 className="fw-bold mb-0">Sales Overview</h4>

                                    <select className="form-select w-auto">
                                        <option>This Month</option>
                                        <option>Last Month</option>
                                        <option>This Year</option>
                                    </select>
                                </div>

                                <div
                                    className="bg-light rounded d-flex justify-content-center align-items-center"
                                    style={{ height: "320px" }}
                                >
                                    <h5 className="text-secondary">
                                        📈 Sales Chart Coming Here
                                    </h5>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Stats */}
                        <div className="col-lg-4">

                            <div className="card shadow-sm border-0 p-4 mb-4">
                                <h6 className="text-muted">Today's Sales</h6>
                                <h2 className="fw-bold">$3,245</h2>
                                <p className="text-success mb-0">
                                    ↑ 18.6% from yesterday
                                </p>
                            </div>

                            <div className="card shadow-sm border-0 p-4 mb-4">
                                <h6 className="text-muted">New Customers</h6>
                                <h2 className="fw-bold">248</h2>
                                <p className="text-primary mb-0">
                                    +32 this week
                                </p>
                            </div>

                            <div className="card shadow-sm border-0 p-4">
                                <h6 className="text-muted">Pending Orders</h6>
                                <h2 className="fw-bold">64</h2>
                                <p className="text-warning mb-0">
                                    Need Attention
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminDashboardAnalytics
