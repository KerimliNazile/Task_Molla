import React from 'react'
import ShowApi from '../ShowApi'
import './index.scss'

const Cards = ({category,image,name}) => {
    const [data,getProducts] = ShowApi([])
    return (
    <div className='col-lg-9'>
        <div className='card'>
           {data && data.map((item)=>(
            <ul key={item.id}>
                <li><img src={item.image} alt="" /></li>
                <li>{item.category}</li>
                <li>{item.name}</li>
            </ul>
           ))}
        </div>
        </div>
    )
}

export default Cards