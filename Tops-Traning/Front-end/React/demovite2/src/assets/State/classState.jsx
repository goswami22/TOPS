// State : it's varibale 
// State : we can change data 
// State : Same File use
// Class and Function 
// Class : this.state fix as object 
// class : this.setstate() function inbuilt use 





import React, { Component } from "react";
import ImageState from "./ImageState";

class ClassState extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Bhavesh',
            count: 0,
            isImage: true
        }
    }


    render() {
        return (
            <div>
                <br />  
                <br />
                <br />
                <h1>This is Class State</h1>

                <h1>Name is : {this.state.name}</h1>
                <button onClick={() => this.setState({ name: 'Janak' })}>Change Name</button>
                <button onClick={() => this.setState({ name: 'Ketan' })}>Change Name</button>
                <button onClick={() => this.setState({ name: 'Raj' })}>Change Name</button>

                <br />
                <br />
                <br />

                <h1>Count : {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increase Count</button>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>Decrease Count</button>
                <button onClick={() => this.setState({ count : 0 })}>Reset</button>

                <br />
                <br />
                <br />

                <button onClick={()=> this.setState({isImage: false})}>Hide</button>
                <button onClick={()=> this.setState({isImage: true})}>Show</button>
                <button onClick={()=> this.setState({isImage: !this.state.isImage})}>Toggle</button>

                
                <br />

                {
                    (this.state.isImage) ? <ImageState/> : false
                }


            </div>
        )
    }
}

export default ClassState;