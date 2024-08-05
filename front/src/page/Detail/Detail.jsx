import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Detail.scss'
import { Helmet } from 'react-helmet'
const Detail = () => {
    const [data, setData] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://practise5-back-end.onrender.com/item/${id}`).then(res => {
            setData(res.data)
        })
    }, [id])
  return (
    <>
    <Helmet>
      <title>Detail</title>
    </Helmet>
    <div className='detailCard'>

      <img src={data.img} alt="" />

      <div className='detailCardBody'>
      <h2>{data.name}</h2>
      <p>{data.desc}</p>
      </div>

    </div></>
  )
}

export default Detail