import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these Cars!</h1>
        <div className="cards_container">
          <div className="cards_wrapper">
            <ul className="cards__items">
                <CardItem 
                src='images/img-9.jpg'
                text='Explore this one'
                label='Cars'
                path='/services'

                />
                <CardItem 
                src='images/img-2.jpg'
                text='Explore this one'
                label='Cars'
                path='/services'
                />
            </ul>
          </div>
        </div>


    </div>
  )
}

export default Cards