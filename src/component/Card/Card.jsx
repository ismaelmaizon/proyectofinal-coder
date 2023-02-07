import React from 'react'
import { Link } from 'react-router-dom';
import css from '../Card/Card.css'


const Card = ( {key, name, img, description} ) => {

  return (   
    <div className='card'>
      <div className='cardTitle'>
        <h1>{name}</h1>
      </div>
      <div>
        <img className='cardImg' src={img} alt="" />
      </div>
      <div className='cardInfo'>
        <h2>Ingredientes:</h2>
        <p>{description[0]+", "+description[1]+", "+description[2]+", "+description[3]+", "+description[4]}</p>
      </div>
      <Link to={`${name}`} >
        <button className='btn'>mas info</button>
      </Link>
    </div>
  )}
    


export default Card;
