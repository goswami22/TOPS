import React from 'react'
import CuratedPicks from '../components/CuratedPicks'
import NonPolicy from '../Components/NonPolicy'
import HomeHero from '../Components/HomeHero'
import Header from '../Common/Header'
import { BrowserRouter } from 'react-router-dom'
import HomeHeaderSlider from '../Components/HomeHeaderSlider'



function Home() {



    return (
        <div>

            <BrowserRouter>
                <Header />
                <HomeHeaderSlider/> 
                <HomeHero/>
                <NonPolicy/>
                <CuratedPicks/>
            </BrowserRouter>

        </div>
    )
}

export default Home
