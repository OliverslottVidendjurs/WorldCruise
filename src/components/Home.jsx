import React from 'react'
import Header from './Header/Header'
import Butikkersection from './Home/Butikker/Butikkersection'
import GoogleMaps from './Home/GoogleMaps/GoogleMaps'
import Slider from './Slider/Slider'

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <GoogleMaps />
            <Butikkersection />
        </div>
    )
}

export default Home;
