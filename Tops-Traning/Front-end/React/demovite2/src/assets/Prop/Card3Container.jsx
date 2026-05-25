import React from "react";
import Card3 from "./Card3";



function Card3Container(){
    return( 

        <div className="container mt-5">
            <div className="row">
                <Card3 img="https://cdn.pixabay.com/photo/2018/10/26/03/31/truck-3773830_1280.jpg" title="Car 1" desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem"  btn="Buy now" />
                <Card3 img="https://cdn.pixabay.com/photo/2021/12/15/14/59/ford-truck-6872831_1280.jpg" title="Car 2" desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem"  btn="Buy now" />
                <Card3 img="https://cdn.pixabay.com/photo/2016/11/21/14/03/woman-1845572_1280.jpg" title="Car 3" desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem"  btn="Buy now" />
                <Card3 img="https://cdn.pixabay.com/photo/2018/03/19/11/37/auto-3239763_1280.jpg" title="Car 4" desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem"  btn="Buy now" />
            </div>
        </div>

    )
}

export default Card3Container;