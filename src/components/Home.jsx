import React from 'react'
import homeimg from '../assects/homeimg.jpg'
import Products from './Products';

function Home() {
  return (
    <div>
        <div className='mainimg'>
            <img src={homeimg}/>
            <div className='card-discription'>
                            <h5>NEW SEASONAL ARRIVALS</h5>
                            <p>CHECK FOR LATEST UPDATES</p>
            </div>
        </div>
        <Products />
    </div>
  )
}

export default Home;