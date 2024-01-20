import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import './Card.scss'
import MainContext from '../../context';
import { Toaster } from 'react-hot-toast';
const Card = ({data,index}) => {
    const{addToWishlist,item}=useContext(MainContext)
  return (
    <div className='card' id='card' key={index}>
     <img src={data.img} alt="" />
     <div className='cardBody'>
        <h4>{data.name}</h4>
        <p><b>Price: </b>{data.price} Azn</p>
           <Link to={`/${data._id}`}>Learn More</Link> <br />
           <FaHeart className='heart' onClick={() => addToWishlist(data) }/>
           <Toaster/>
     </div>
    </div>
  )
}

export default Card