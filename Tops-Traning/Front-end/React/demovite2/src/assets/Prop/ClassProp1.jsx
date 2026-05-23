import React, { Component } from "react";
import '../Css/style.css'


class ClassProp1 extends Component {

    render() {
        return (
            <div>
                <h1 style={{ background: "red", color: "white" }}>This is Property Class</h1>

                <h1 className="main">This is Property2 Class</h1>

                <h1 className="main">1</h1>

            </div>
        )
    }
}

export default ClassProp1;