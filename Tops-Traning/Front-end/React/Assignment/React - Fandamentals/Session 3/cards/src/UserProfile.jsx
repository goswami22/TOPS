import React from 'react'

function UserProfile({ username="James", followers=0, profilePic="https://img2.clipart-library.com/28/clipart-profile-picture/clipart-profile-picture-2.jpg" }) {
    return (
        <div className='col-md-3 mb-4'>
            <div className="card text-center shadow p-3 mx-auto" style={{ width: "18rem" }}>

                <img
                    src={profilePic}
                    className="card-img-top rounded-circle mx-auto mt-3"
                    alt="profile"
                    style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover"
                    }}
                />

                <div className="card-body">

                    <h4 className="card-title">
                        {username}
                    </h4>

                    <p className="card-text text-muted">
                        {followers} Followers
                    </p>

                    <button className="btn btn-primary">
                        Follow
                    </button>

                </div>
            </div>
        </div>
    )
}

export default UserProfile