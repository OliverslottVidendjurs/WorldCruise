import React from 'react'
import Header from './Header/Header'
import Butikkersection from './Home/Butikker/Butikkersection'
import GoogleMaps from './Home/GoogleMaps/GoogleMaps'

const Home = () => {
    return (
        <div>
            <Header />
            <Butikkersection />
            <GoogleMaps />
        </div>
    )
}

export default Home;
