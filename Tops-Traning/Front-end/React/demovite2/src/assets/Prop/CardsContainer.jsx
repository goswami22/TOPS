import React from "react";
import Card2 from "./Card2";


function CardsContainer(){
    return(
        <div className="container mb-5">
            <div className="row">
                <Card2 img='https://cdn.pixabay.com/photo/2026/02/18/17/44/daniil_kondrashin-model-10131317_1280.jpg' title='Card 1' desc='Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.' btn='Buy Now'/> 
                <Card2 img='https://cdn.pixabay.com/photo/2020/03/04/21/46/mosque-4902814_1280.jpg' title='Card 2' desc='Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.' btn='Buy Now'/> 
                <Card2 img='https://cdn.pixabay.com/photo/2025/05/28/11/21/peony-9627222_1280.jpg' title='Card 3' desc='Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.' btn='Buy Now'/> 
                <Card2 img='https://cdn.pixabay.com/photo/2026/05/18/18/44/18-44-14-412_1280.jpg' title='Card 4' desc='Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.' btn='Buy Now'/> 
               
            </div>
        </div>       
    )
}


export default CardsContainer;