import React from 'react'

function FollowerList() {

    const userName = ['Bhavesh', 'Umang', 'Ketan']



    return (
        <div>
            {

                userName.length ? (
                    userName.map((item, index) => (
                        <ul key={index}>
                            <li><h2>{item}</h2></li>
                        </ul>
                    ))
                )
                    :

                    (
                        <h3>no folloers yet</h3>

                    )

            }
        </div>
    )
}

export default FollowerList
